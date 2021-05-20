<template>
  <div>
    <el-row :gutter="20">
      <el-col :md="18">
        <el-row>
          <el-col :span="16">
            <h3>Profile</h3>
          </el-col>
          <el-col :span="8">
            <el-button
              type="primary"
              icon="el-icon-edit"
              class="float-right"
              @click="openProfileEditForm = true"
              >Edit</el-button
            >
          </el-col>
        </el-row>
        <el-row class="mt-4" :gutter="20">
          <el-col :md="8">
            <el-card class="box-card clickable" shadow="hover">
              <el-row>
                <el-col :span="18">
                  <div class="o-card-title-3">
                    Full Name
                  </div>
                  <div class="o-card-data" v-show="!showLoading">
                    {{
                      `${userDetail.driverFirstName} ${userDetail.driverLastName}`
                    }}
                  </div>
                  <div
                    class="dashboard-row dashboard-loader"
                    v-show="showLoading"
                  >
                    <i class="el-icon-loading"></i>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="o-card-icon">
                    <i class="fal fa-user"></i>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>

          <el-col :md="8">
            <el-card class="box-card clickable" shadow="hover">
              <el-row>
                <el-col :span="18">
                  <div class="o-card-title-3">
                    Phone
                  </div>
                  <div class="o-card-data" v-show="!showLoading">
                    {{ `${userDetail.driverPhoneNumber}` }}
                  </div>
                  <div
                    class="dashboard-row dashboard-loader"
                    v-show="showLoading"
                  >
                    <i class="el-icon-loading"></i>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="o-card-icon">
                    <i class="fal fa-phone"></i>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>

          <el-col :md="8">
            <el-card class="box-card clickable" shadow="hover">
              <el-row>
                <el-col :span="18">
                  <div class="o-card-title-3">
                    Email
                  </div>
                  <div class="o-card-data" v-show="!showLoading">
                    {{ `${userDetail.driverEmail}` }}
                  </div>
                  <div
                    class="dashboard-row dashboard-loader"
                    v-show="showLoading"
                  >
                    <i class="el-icon-loading"></i>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="o-card-icon">
                    <i class="fal fa-user"></i>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>

        <el-row class="mt-4" :gutter="20">
          <el-col :md="8">
            <el-card class="box-card clickable" shadow="hover">
              <el-row>
                <el-col :span="18">
                  <div class="o-card-title-3">
                    Address
                  </div>
                  <div class="o-card-data" v-show="!showLoading">
                    {{ `${userDetail.driverHomeAddress}` }}
                  </div>
                  <div
                    class="dashboard-row dashboard-loader"
                    v-show="showLoading"
                  >
                    <i class="el-icon-loading"></i>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="o-card-icon">
                    <i class="fal fa-globe-europe"></i>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>

          <el-col :md="8">
            <el-card class="box-card clickable" shadow="hover">
              <el-row>
                <el-col :span="18">
                  <div class="o-card-title-3">
                    Gender
                  </div>
                  <div class="o-card-data" v-show="!showLoading">
                    {{ `${userDetail.driverGender}` }}
                  </div>
                  <div
                    class="dashboard-row dashboard-loader"
                    v-show="showLoading"
                  >
                  <i class="el-icon-loading"></i>
                   
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="o-card-icon">
                     <i class="fal fa-venus-mars"></i>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>

          <el-col :md="8">
            <el-card class="box-card clickable" shadow="hover">
              <el-row>
                <el-col :span="18">
                  <div class="o-card-title-3">
                    Date of Birth
                  </div>
                  <div class="o-card-data" v-show="!showLoading">
                    {{ `${userDetail.driverDob}` }}
                  </div>
                  <div
                    class="dashboard-row dashboard-loader"
                    v-show="showLoading"
                  >
                    <i class="el-icon-loading"></i>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="o-card-icon">
                    <i class="fal fa-calendar-star"></i>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-dialog
      title="Update Your Details"
      :visible.sync="openProfileEditForm"
      width="50%"
      :before-close="handleClose"
    >
      <personal-information
        @close="openProfileEditForm = false"
        :action-data="userDetail"
        @refresh="refreshData"
      ></personal-information>
    </el-dialog>
  </div>
</template>
<script>
import PersonalInformation from "./Registration/PersonalInformation";
export default {
  components: {
    PersonalInformation,
  },
  data() {
    return {
      showLoading: false,
      openProfileEditForm: true,
      userDetail: {
        first_name: "Dipesh",
        last_name: "Basnet",
        dob: "1998-09-09",
        home_address: "Jhapa",
        phone_number: "9292929939",
        email: "bdipesh08@gmail.com",
        gender: "Male",
      },
    };
  },
  created() {
    this.authUser = JSON.parse(localStorage.getItem("authUser"));
    this.userDetail = this.authUser;
    var t = new Date(Date.UTC(1970, 0, 1)); // Epoch
    t.setUTCSeconds(this.authUser.driverDob.seconds);
    this.userDetail.driverDob = `${t.getDate()}-${t.getMonth()}-${t.getUTCFullYear()}`;
  },
  methods: {
    refreshData() {
      this.showLoading = true;
      this.openProfileEditForm = false;
      firebase
        .firestore()
        .collection("drivers")
        .doc(this.authUser.driverId)
        .get()
        .then((snapshot) => {
          this.userDetail = snapshot.data();
          this.$nextTick(() => {
            localStorage.setItem("authUser", JSON.stringify(snapshot.data()));
            this.authUser = JSON.parse(localStorage.getItem("authUser"));
          });
        })
        .catch((error) => ({
          errorCode: error.code,
          errorMessage: error.message,
        }))
        .finally((this.showLoading = false));
    },
    handleClose(done) {
      this.$confirm("Are you sure to close this dialog?")
        .then((_) => {
        
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>
<style scoped>
.float-right {
  float: right;
}
.mt-4 {
  margin-top: 4rem;
}
.o-card-data {
  margin-top: 2rem;
  font-size: 16px;
}
</style>
