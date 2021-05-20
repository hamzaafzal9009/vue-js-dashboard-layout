<template>
  <div id="dashboard-container">
    <el-row :gutter="20">
      <el-col
        :md="6"
        :sm="24"
        v-for="(item, i) in earningsInformation"
        :key="i"
      >
        <el-card class="box-card clickable" shadow="hover">
          <el-row>
            <el-col :span="18">
              <div class="o-card-title-3">
                {{ item.title }}
              </div>
              <div class="o-card-data" v-show="!showLoading">
                <span v-if="item.title === 'Trips Total'">
                  {{ tripsTotal }}
                </span>
                <span v-else-if="item.title === 'My Earnings'">
                  {{ myEarning }}
                </span>
                <span v-else>
                  {{ viteFees }}
                </span>
              </div>
              <div class="dashboard-row dashboard-loader" v-show="showLoading">
                <i class="el-icon-loading"></i>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="o-card-icon">
                <i :class="item.icon"></i>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :md="6" :sm="24">
        <el-card class="box-card clickable" shadow="hover">
          <el-row>
            <el-col :span="12" v-for="(item, i) in ratingInformation" :key="i">
              <div class="o-card-title-3 text-center">
                {{ item.title }}
              </div>
              <div class="o-card-data text-center" v-show="!showLoading">
                {{ authUser[item.value] || "-" }}
              </div>
              <div
                class="dashboard-row dashboard-loader text-center"
                v-show="showLoading"
              >
                <i class="el-icon-loading"></i>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :md="12" :sm="24">
        <el-card class="box-card clickable" shadow="hover">
          <div class="o-card-title-3">
            Trips Information
          </div>
          <bar-chart :chart-data="chartData" display-legend></bar-chart>
        </el-card>
      </el-col>
      <el-col :md="12" :sm="24">
        <el-card class="box-card clickable" shadow="hover">
          <div class="o-card-title-3">
            Trips Information
          </div>
          <br />
          <el-row :gutter="20">
            <el-col
              :md="12"
              :sm="24"
              v-for="(item, i) in tripsInformation"
              :key="i"
            >
              <el-card class="box-card clickable" shadow="hover">
                <div class="o-card-title-3 text-center">
                  {{ item.title }}
                </div>
                <div class="o-card-data text-center">
                  {{ authUser[item.value] || "-" }}
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <trip-history></trip-history>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import firebase from "../plugins/firebase";
const db = firebase.firestore();
import BarChart from "./Charts/BarChart";
const myEarningRef = db.collection("dailyEarnings");
import TripHistory from "./DashboardComponents/TripHistory";
import { EventService } from "../main.js";
export default {
  name: "dashboard",
  components: {
    BarChart,
    TripHistory,
  },
  data() {
    return {
      showLoading: false,

      earningsInformation: [
        {
          title: "Trips Total",
          value: "totalTrips",
          icon: "fal fa-suitcase-rolling",
        },
        {
          title: "My Earnings",
          value: "totalEarnings",
          icon: "fal fa-sack-dollar",
        },
        {
          title: "Vite Fee",
          value: "",
          icon: "fal fa-comment-dollar",
        },
      ],
      ratingInformation: [
        {
          title: "Five Star",
          value: "fiveStarTrips",
        },
        {
          title: "Current",
          value: "ratedTrips",
        },
      ],
      tripsInformation: [
        {
          title: "Total",
          value: "totalTrips",
        },
        {
          title: "Accepted",
          value: "acceptedTrips",
        },
        {
          title: "No Show",
          value: "noShowTrips",
        },
        {
          title: "Missed",
          value: "missedTrips",
        },
        {
          title: "Cancelled",
          value: "canceledTrips",
        },
      ],
      chartData: {
        labels: ["Status"],
        datasets: [
          {
            label: "Total Trips",
            value: "totalTrips",
            backgroundColor: "blue",
            borderColor: "#716ACA",
            data: [],
          },
          {
            label: "Accepted",
            value: "acceptedTrips",
            backgroundColor: "green",
            borderColor: "#716ACA",
            data: [],
          },
          {
            label: "No Show Trips",
            value: "noShowTrips",
            backgroundColor: "orange",
            borderColor: "#716ACA",
            data: [],
          },
          {
            label: "Missed",
            value: "missedTrips",
            backgroundColor: "red",
            borderColor: "#716ACA",
            data: [],
          },
          {
            label: "Canceled",
            backgroundColor: "grey",
            value: "canceledTrips",
            borderColor: "#716ACA",
            data: [],
          },
        ],
      },
      dailyEarningDetail: { total_earnings: 0 },
    };
  },
  computed: {
    totalPrice() {
      return Object.values(this.dailyEarningDetail).map(
        (x) => parseInt(x.total_earnings) || 0
      );
    },
    tripsTotal() {
      return this.totalPrice.reduce(this.sum);
    },
    myEarning() {
      return Math.ceil(this.tripsTotal - this.tripsTotal * 0.1);
    },
    viteFees() {
      return Math.ceil(this.tripsTotal * 0.1);
    },
  },
  created() {
    this.authUser = JSON.parse(localStorage.getItem("authUser"));
    EventService.$emit("checkUserStatus");
    this.getDailyEarnings();
    this.$nextTick(() => {
      this.chartData.datasets.forEach((ele) => {
        ele.data.push(this.authUser[ele.value]);
      });
    });
  },
  methods: {
    getDailyEarnings() {
      this.showLoading = true;
      myEarningRef
        .doc(this.authUser.driverId)
        .get()
        .then((data) => {
          const responseData = data.data();
          console.dir(responseData);
          this.dailyEarningDetail = responseData || { total_earnings: 0 };
          this.showLoading = false;
        });
    },
    sum(x, y) {
      return x + y;
    },
  },
};
</script>

<style scoped></style>
