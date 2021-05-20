<template>
  <div class="login-wrapper">
    <div class="content">
      <div class="header">
        <img
          class="header-image"
          src="../assets/img/logo-transparent.png"
          width="100"
          alt="Opiniion"
        />
        <div class="header-link-wrapper">
          <el-link
            class="header-link"
            href="http://viteadmin.site/"
            type="#FFFFFF"
            target="_blank"
            icon="fa fa-angle-left"
            >&nbsp;&nbsp;Go back to Home</el-link
          >
        </div>
      </div>
      <el-card class="absolute-centered login-card">
        <span class="login-header horizontal-centered">Login</span>
        <el-input
          v-model="formValues.phone_number"
          :rules="requiredRules"
          prefix-icon="fal fa-mobile"
          placeholder="Phone Number (+2301111111111)"
          @keyup.enter.native="doLogin()"
          required
        ></el-input>
        <el-input
          v-model="formValues.password"
          prefix-icon="fal fa-key"
          placeholder="Password"
          :rules="requiredRules"
          type="password"
          @keyup.enter.native="doLogin()"
          show-password
          required
        ></el-input>
        <div class="error-message" v-if="loginError">{{ loginError }}</div>
        <div class="remember-container flex-space-between">
          <el-checkbox :checked="remember" v-model="remember"
            >Remember Me</el-checkbox
          >
          <!-- <router-link to="/" class="fp float-right" href
            >Forgot Password?</router-link
          > -->
        </div>

        <el-button class="login-button" @click="doLogin" type="primary" round
          >Login</el-button
        >
      </el-card>
    </div>
    <footer class="footer">
      <div class="login-bottom-nav flex-center">
        <div>
          <div class="credits ml-auto">
            <div class="copyright">
              &copy; {{ new Date().getFullYear() }} Viteapp. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { EventService } from "../main.js";
import firebase from "firebase/app";
import "firebase/auth";
const db = firebase.firestore();
const ref = db.collection("drivers");

export default {
  name: "login",
  data: function() {
    return {
      error: "",
      show: false,
      valid: true,
      lazy: true,
      loading: false,
      selectedCountry: {
        name: "Mauritius",
        dial_code: "+230",
        code: "MU",
      },
      formValues: {},
      requiredRules: [(v) => !!v || "This is required"],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      password: "",
      loginError: null,
      logoutReason: null,
      remember: false,
    };
  },
  created() {
    // const user = localStorage.getItem("authUser")
    //   ? JSON.parse(localStorage.getItem("authUser"))
    //   : null;
    // if (user) {
    //   if (["incomplete", "pending"].includes(user.driverStatus)) {
    //     // this.$router.push('/registration/additional-details')
    //     localStorage.setItem("profileStatus", "incomplete");
    //   }
    //   this.$router.push("/dashboard");
    // }
    localStorage.removeItem("authUser");
  },
  methods: {
    doLogin() {
      var vm = this;
      if (vm.formValues.phone_number == "" || vm.formValues.password == "") {
        vm.loginError = "Phone Number &amp; Password is Required";
        return;
      }
      EventService.$emit("loading", "show");
      vm.loginError = null;
      const credential = {
        phone_number: vm.formValues.phone_number,
        password: vm.formValues.password,
      };
      ref
        .doc(credential.phone_number)
        .get()
        .then((data) => {
          const responseData = data.data();
          if (responseData) {
            firebase
              .auth()
              .signInWithEmailAndPassword(
                responseData.driverEmail,
                credential.password
              )
              .then((response) => {
                EventService.$emit("successMessage", "Login Successful");
                localStorage.setItem("authUser", JSON.stringify(responseData));

                EventService.$emit("loading", "hide");
                if (
                  ["incomplete", "pending"].includes(responseData.driverStatus)
                ) {
                  localStorage.setItem("profileStatus", "incomplete");
                }
                this.$router.push("/dashboard");
              })
              .catch((error) => {
                console.error("Error", error);
                vm.loginError = "Phone Number or Password is wrong";
                // EventService.$emit("errorMessage", "Something Went Wrong");
                EventService.$emit("loading", "hide");
              });
          } else {
            EventService.$emit("loading", "hide");
            if (credential.phone_number == undefined) {
              vm.loginError = "Please Enter Phone Number";
            } else if (credential.password == undefined) {
              vm.loginError = "Please Enter Password";
            } else {
              EventService.$emit("errorMessage", "User Not Found");
            }
          }
        });
    },
    isMobile() {
      let screen = [
        window.screen.availHeight * window.devicePixelRatio,
        window.screen.availWidth * window.devicePixelRatio,
      ];
      if (screen[0] < 1000 && screen[1] < 800) {
        return true;
      } else {
        return false;
      }
    },
    setCookie() {
      let year = 60 * 60 * 24 * 1000 * 365;
      let now = new Date();
      let then = now.getTime() + year;
      if (this.remember) {
        document.cookie = `email=${this.email}; expires=${new Date(then)};`;
        document.cookie = `remember=true; expires=${new Date(then)};`;
      }
      if (!this.remember) {
        document.cookie = `email=; expires=${new Date(now.getTime() - year)};`;
        document.cookie = `remember=; expires=-1;`;
      }
    },
  },
};
</script>

<style scoped>
@media (max-width: 600px) {
  .header-image {
    margin: auto;
  }
  .header-link-wrapper {
    margin: 10px auto;
  }
}
.login-wrapper {
  height: 100vh;
  width: 100%;
  background: url("../assets/img/login-bg.svg");
  background-size: cover;
  background-repeat: no-repeat;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  height: 130px;
  padding: 40px;
}

.header-link {
  color: white;
}
.header > .header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 25px;
}

.header-row > img {
  width: 170px;
}

.left-header {
  font-size: 15px !important;
  color: white;
  z-index: 999;
}

.login-button {
  width: 100%;
  margin-top: 10px;
}
.login-card {
  animation: 0.35s ease slideFadeFromBottom;
  position: relative;
  width: 340px;
  max-width: 90%;
  height: 380px;
}

.content {
  width: 100vw;
  height: 100vh;
  margin: auto;
  z-index: 10;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  display: flex;
}

.login-header {
  margin: 0 0 40px 0;
  font-size: 30px;
}

.remember-container {
  margin: 20px 0px 20px 0px;
}

.fp {
  text-decoration: none;
  color: 1976d2 !important;
  font-size: 12px;
}

.agreement-container {
  font-size: 12px;
  width: 80%;
  text-align: center;
  margin: 20px auto;
  line-height: 1.5;
}

footer {
  position: absolute;
  width: 100%;
  bottom: 10px;
  font-size: 12px;
  color: #757575;
}

.login-bottom-nav {
  margin: 30px 50px;
}

.router-links {
  width: 200px;
}

.fc {
  color: white;
  text-decoration: none;
}

.fa-angle-left {
  margin-right: 8px;
}

.error-message {
  color: #dd2c00;
  width: 100%;
  font-size: 11px;
  text-align: left;
  margin-bottom: 5px;
}
@media (max-width: 360px) {
  .header {
    margin: 0;
    padding: 10px;
  }
}
@media (max-width: 1200px) {
  .header {
    margin-top: 20px;
  }
  .login-wrapper {
    background: url("../assets/img/login-bg.svg") 50% 50%;
  }
}
@media screen and (max-width: 500px) {
  .header > .header-row {
    flex-direction: column;
    justify-content: center;
  }
  .header > .header-row > div {
    margin-top: 10px;
  }
}
</style>
