<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-input
          placeholder="Manufacturer..."
          v-model="formValues.manufacturer"
          :rules="requiredRules"
        ></el-input>
      </el-col>
      <el-col :span="12">
        <el-input
          placeholder="Modal..."
          v-model="formValues.modelName"
          :rules="requiredRules"
        ></el-input>
      </el-col>
      <el-col :span="12">
        <el-input
          placeholder="Manufacture Year..."
          v-model="formValues.modelYear"
          :rules="requiredRules"
        ></el-input>
      </el-col>
      <el-col :span="12">
        <el-input
          placeholder="Color..."
          v-model="formValues.vehicleColor"
          :rules="requiredRules"
        ></el-input>
      </el-col>
      <el-col :span="12">
        <el-input
          placeholder="License Plate..."
          v-model="formValues.licensePlateNumber"
          :rules="requiredRules"
        ></el-input>
      </el-col>
      <el-col :span="12">
        <el-input
          placeholder="No. of Seats..."
          v-model="formValues.numberOfSeats"
          :rules="requiredRules"
        ></el-input>
      </el-col>
    </el-row>
    <el-button type="primary" @click="updateData" :loading="showLoading"
      >Update</el-button
    >
  </div>
</template>
<script>
import firebase from "../../plugins/firebase";
import { EventService } from "../../main.js";
const db = firebase.firestore();
const ref = db.collection("vehicles");
export default {
  props: {
    actionData: {
      type: Object,
      default() {
        return {
          manufacturer: "",
          modelName: "",
          modelYear: "",
          licensePlateNumber: "",
          vehicleColor: "",
          numberOfSeats: "",
        };
      },
    },
  },
  data() {
    return {
      formValues: {},
      showLoading: false,
      requiredRules: [(v) => !!v || "This is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  created() {
    this.authUser = JSON.parse(localStorage.getItem("authUser"));
    if (
      this.actionData.manufacturer != "" &&
      this.actionData.modelName != "" &&
      this.actionData.modelYear != "" &&
      this.actionData.licensePlateNumber != "" &&
      this.actionData.vehicleColor != "" &&
      this.actionData.numberOfSeats != ""
    ) {
      this.formValues = { ...this.actionData };
    } else {
      firebase
        .firestore()
        .collection("vehicles")
        .doc(this.authUser.driverId)
        .get()
        .then((snapshot) => {
          this.formValues = { ...snapshot.data() };
          this.showLoading = false;
        })
        .catch((error) => ({
          errorCode: error.code,
          errorMessage: error.message,
        }));
      this.formValues = JSON.parse(localStorage.getItem("authUser"));
    }
  },
  methods: {
    updateData() {
      EventService.$emit("loading", "show");
      this.showLoading = true;
      ref
        .doc(this.authUser.driverId)
        .update(this.formValues)
        .then(() => {
          EventService.$emit("loading", "hide");
          EventService.$emit("successMessage", "Updated Successful");
          this.$emit("refresh");
        })
        .catch((error) => {
          console.log(
            "🚀 ~ file: Vehicle.vue ~ line 263 ~ updateData ~ error",
            error
          );
          this.showLoading = false;
          EventService.$emit("loading", "hide");
        });
    },
  },
};
</script>

<style scoped></style>
