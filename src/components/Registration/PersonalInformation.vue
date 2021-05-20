<template>
  <div>
    <el-row :gutter="20">
      <el-col :md="8">
        <el-input
          type="text"
          placeholder="First Name"
          v-model="formValues.driverFirstName"
          :rules="requiredRules"
        ></el-input>
      </el-col>
      <el-col :md="8">
        <el-input
          type="text"
          placeholder="Last Name"
          v-model="formValues.driverLastName"
          :rules="requiredRules"
        ></el-input>
      </el-col>
      <el-col :md="8">
        <el-input
          type="email"
          placeholder="Email"
          v-model="formValues.driverEmail"
          :rules="emailRules"
        ></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :md="12">
        <el-input
          type="text"
          placeholder="Date Of Birth (MM/DD/YYYY)"
          v-model="formValues.driverDob"
          :rules="requiredRules"
        ></el-input>
      </el-col>
      <el-col :md="12">
        <el-row>
          <el-col :span="6"><h4>Gender:</h4></el-col>
          <el-col v-for="(item, i) in ['Male', 'Female']" :key="i" :span="6">
            <el-button
              :type="formValues.driverGender === item ? 'primary' : ''"
              @click="formValues.driverGender = item"
              >{{ item }}</el-button
            >
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-input
          type="textarea"
          :rows="3"
          :rules="requiredRules"
          v-model="formValues.driverHomeAddress"
          placeholder="Please input"
        >
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="mt-2">
      <el-col :span="12">
        <el-button type="warning" class="float-right" @click="$emit('close')">
          Cancel
        </el-button>
      </el-col>
      <el-col :span="12">
        <el-button type="primary" @click="updateData()">
          Save
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import firebase from "../../plugins/firebase";
const db = firebase.firestore();
const ref = db.collection("drivers");
import { EventService } from "../../main.js";
export default {
  props: {
    actionData: {
      type: Object,
      default() {
        return {
          driverFirstName: "",
          driverLastName: "",
          driverEmail: "",
          driverGender: "",
          driverHomeAddress: "",
          driverPhoneNumber: "",
          driverDob: "",
        };
      },
    },
  },
  data() {
    return {
      formValues: {},
      requiredRules: [(v) => !!v || "This is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  created() {
    if (
      this.actionData.driverFirstName != "" &&
      this.actionData.driverLastName != "" &&
      this.actionData.driverEmail != "" &&
      this.actionData.driverGender != "" &&
      this.actionData.driverHomeAddress != "" &&
      this.actionData.driverPhoneNumber != "" &&
      this.actionData.driverDob != ""
    ) {
      this.formValues = { ...this.actionData };
    } else {
      this.formValues = JSON.parse(localStorage.getItem("authUser"));
    }
  },
  methods: {
    updateData() {
      EventService.$emit("loading", "show");
      //   console.log(this.actionData);
      ref
        .doc(this.actionData.driverId)
        .update(this.formValues)
        .then(() => {
          EventService.$emit("loading", "hide");

          EventService.$emit(
            "successMessage",
            "Successfully Updated Your Information."
          );
          // this.setNotifyMessage("Successfully Updated Your Information.");

          this.$emit("refresh");
        })
        .catch(() => {
          EventService.$emit("loading", "hide");

          EventService.$emit("errorMessage", "Something went wrong.");
          // this.setNotifyError("Something went wrong");
        });
    },
  },
};
</script>
<style scoped>
.float-right {
  float: right;
}
.mt-2 {
  margin-top: 2rem;
}
</style>
