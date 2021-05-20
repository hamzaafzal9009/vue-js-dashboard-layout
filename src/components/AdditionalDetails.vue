<template>
  <div>
    <el-steps :active="active" align-center>
      <el-step
        title="Step 1"
        description="Personal Information
"
      ></el-step>
      <el-step
        title="Step 2"
        description="Vechicle Information
"
      ></el-step>
      <el-step title="Step 3" description="Documents"> </el-step>
      <el-step
        title="Step 4"
        description="Reviewing in progress

"
      ></el-step>
    </el-steps>

    <Documents v-if="active == 2"></Documents>
    <PersonalInformation v-if="active == 0"></PersonalInformation>
    <VehicleInformation v-if="active == 1"></VehicleInformation>

    <el-row style="padding: 50px" v-if="active==3">
      <h2>We're reviewing your information.</h2>
      <h4 style="margin-top:20px">
        Vite Driver Profile Created
      </h4>
      <h3 style="margin-top:20px">
        Vite Driver Screening ongoing
      </h3>
      <p>
        Usually takes 1-3 days but may extend to a week as approval is done in
        batches. Our team is reviewing your background information and will
        grant approval afterwards.
      </p>
      <h3>
        Access Dashboard and Driver App &amp; Start Earning
      </h3>
    </el-row>

    <el-button
      style="margin-top: 12px;"
      type="primary"
      class="float-right"
      v-if="active != 3"
      @click="next"
      >Next step</el-button
    ><el-button
      style="margin-top: 12px;"
      type="warning"
      class="float-left"
      v-if="active != 0"
      @click="back"
      >Back</el-button
    >
    <br /><br />
  </div>
</template>
<script>
import { EventService } from "../main.js";
import VehicleInformation from "./Registration/VehicleInformation";
import PersonalInformation from "./Registration/PersonalInformation";
import Documents from "./Documents";
import firebase from "../plugins/firebase";
const db = firebase.firestore();
const driverRef = db.collection("drivers");
export default {
  components: {
    VehicleInformation,
    PersonalInformation,
    Documents,
  },
  data() {
    return {
      active: 0,
    };
  },

  methods: {
    next() {
      if (this.active++ > 3) this.active = 4;
    },
    back() {
      this.active -= this.active;
    },
  },
};
</script>
<style scoped>
.float-left {
  float: left;
}
.float-right {
  float: right;
}
</style>
