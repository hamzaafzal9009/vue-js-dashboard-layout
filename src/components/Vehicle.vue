<template>
  <div id="dashboard-container">
    <el-row>
      <el-col :span="12">
        <h3>Vehicle Information</h3>
      </el-col>
      <el-col :span="12">
        <el-button
          type="primary"
          icon="el-icon-edit"
          class="float-right"
          @click="dialogFormVisible = true"
        >
          Edit
        </el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :md="8">
        <el-card class="box-card clickable" shadow="hover">
          <el-row>
            <el-col :span="18">
              <div class="o-card-title-3">
                Manufacturer
              </div>
              <div class="o-card-data" v-show="!showLoading">
                {{ vehicleDetail.manufacturer }}
              </div>
              <div class="dashboard-row dashboard-loader" v-show="showLoading">
                <i class="el-icon-loading"></i>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="o-card-icon">
                <i class="fal fa-car-side"></i>
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
                Model Name
              </div>
              <div class="o-card-data" v-show="!showLoading">
                {{ vehicleDetail.modelName }}
              </div>
              <div class="dashboard-row dashboard-loader" v-show="showLoading">
                <i class="el-icon-loading"></i>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="o-card-icon">
                <i class="fal fa-car-alt"></i>
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
                Model year
              </div>
              <div class="o-card-data" v-show="!showLoading">
                {{ vehicleDetail.modelYear }}
              </div>
              <div class="dashboard-row dashboard-loader" v-show="showLoading">
                <i class="el-icon-loading"></i>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="o-card-icon">
                <i class="fal fa-calendar-day"></i>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :md="8">
        <el-card class="box-card clickable" shadow="hover">
          <el-row>
            <el-col :span="18">
              <div class="o-card-title-3">
                License Number
              </div>
              <div class="o-card-data" v-show="!showLoading">
                {{ vehicleDetail.licensePlateNumber }}
              </div>
              <div class="dashboard-row dashboard-loader" v-show="showLoading">
                <i class="el-icon-loading"></i>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="o-card-icon">
                <i class="fal fa-id-badge"></i>
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
                Vehicle Color
              </div>
              <div class="o-card-data" v-show="!showLoading">
                {{ vehicleDetail.vehicleColor }}
              </div>
              <div class="dashboard-row dashboard-loader" v-show="showLoading">
                <i class="el-icon-loading"></i>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="o-card-icon">
                <i class="fal fa-paint-brush"></i>
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
                No of Seats
              </div>
              <div class="o-card-data" v-show="!showLoading">
                {{ vehicleDetail.numberOfSeats }}
              </div>
              <div class="dashboard-row dashboard-loader" v-show="showLoading">
                <i class="el-icon-loading"></i>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="o-card-icon">
                <i class="fal fa-loveseat"></i>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog
      title="Update Vehicle Information"
      :visible.sync="dialogFormVisible"
      width="70%"
      center
      :before-close="handleClose"
    >
      <VehicleInformation
        :title="'Update Your Details'"
        @close="dialogFormVisible = false"
        :action-data="vehicleDetail"
        @refresh="getVechicleInfo(), (dialogFormVisible = false)"
      ></VehicleInformation>
    </el-dialog>
  </div>
</template>
<script>
import { EventService } from "../main.js";
import VehicleInformation from "./Registration/VehicleInformation";
import firebase from "../plugins/firebase";
const db = firebase.firestore();
const ref = db.collection("vehicles");
export default {
  components: {
    VehicleInformation,
  },
  data() {
    return {
      dialogFormVisible: false,
      showLoading: false,
      vehicleDetail: {
        manufacturer: "Audi",
        modelName: "Audi 2020",
        modelYear: "1998-09-09",
        licensePlateNumber: "233423",
        vehicleColor: "Red",
        numberOfSeats: "6",
      },
      formValues: {},
      requiredRules: [(v) => !!v || "This is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  created() {
    this.authUser = JSON.parse(localStorage.getItem("authUser"));
    this.formValues = { ...this.vehicleDetail };
    this.getVechicleInfo();
  },
  methods: {
    handleClose(done) {
      this.$confirm("Are you sure to close this dialog?")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    updateData() {
      EventService.$emit("loading", "show");
      this.showLoading = true;
      ref
        .doc(this.authUser.driverId)
        .update(this.formValues)
        .then(() => {
          EventService.$emit("loading", "hide");
          EventService.$emit("successMessage", "Updated Successful");
          this.dialogFormVisible = false;
          this.showLoading = false;
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
    getVechicleInfo() {
      this.showLoading = true;
      firebase
        .firestore()
        .collection("vehicles")
        .doc(this.authUser.driverId)
        .get()
        .then((snapshot) => {
          this.vehicleDetail = { ...snapshot.data() };
          this.showLoading = false;
        })
        .catch((error) => ({
          errorCode: error.code,
          errorMessage: error.message,
        }));
    },
  },
};
</script>
<style scoped>
.float-right {
  float: right;
}
</style>
