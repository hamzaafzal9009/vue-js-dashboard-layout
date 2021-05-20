<template>
  <div>
    <el-card class="box-card" shadow="always">
      <el-row :gutter="20">
        <el-col :span="18">
          <div class="o-card-title-3">
            Trip History
          </div>
        </el-col>
        <el-col :span="6">
          <el-input
            placeholder="Search Trips..."
            v-model="search"
            clearable=""
          ></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-table :data="tripFilterData" stripe style="width: 100%">
            <el-table-column label="Date">
              <template slot-scope="props">
                {{ props.row.parentDate }}
              </template>
            </el-table-column>
            <el-table-column label="Rider">
              <template slot-scope="props">
                {{ props.row.user ? props.row.user.userFullName : "--" }}
              </template>
            </el-table-column>
            <el-table-column label="Ride Status">
              <template slot-scope="props">
                {{ props.row.rideStatus }}
              </template>
            </el-table-column>
            <el-table-column label="Pickup">
              <template slot-scope="props">
                {{
                  props.row.pickUpLocation
                    ? props.row.pickUpLocation.itemTitle
                    : ""
                }}
              </template>
            </el-table-column>

            <el-table-column label="Dropoff">
              <template slot-scope="props">
                {{
                  props.row.pickUpLocation
                    ? props.row.pickUpLocation.itemTitle
                    : ""
                }}
              </template>
            </el-table-column>
            <el-table-column label="Total Price">
              <template slot-scope="props">
                {{ props.row.finalPrice }}
              </template>
            </el-table-column>
            <el-table-column label="Earning">
              <template slot-scope="props">
                {{ props.row.my_earnings }}
              </template>
            </el-table-column>
            <el-table-column label="Vite Fee">
              <template slot-scope="props">
                {{ props.row.vite_fees }}
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import firebase from "../../plugins/firebase";
const db = firebase.firestore();
const ref = db.collection("driverHistories");
const myEarningRef = db.collection("dailyEarnings");
export default {
  data() {
    return {
      tripsDetail: {},
      tripsInfo: [],
      dailyEarningDetail: {},
      authUser: {},
      search: "",
    };
  },
  computed: {
    tripHistory() {
      return Object.values(this.tripsDetail).filter((el) => el.parentDate);
    },
    tripFilterData() {
      return this.tripsInfo.filter((ele) => {
        return (
          ele.parentDate.includes(this.search) &&
          ele.user &&
          ele.user.userFullName
            .toLowerCase()
            .includes(this.search.toLowerCase()) &&
          ele.pickUpLocation.itemTitle.includes(this.search) &&
          ele.dropOffLocation.itemTitle.includes(this.search) &&
          ele.finalPrice &&
          ele.finalPrice.includes(this.search) &&
          ele.my_earnings &&
          ele.my_earnings.includes(this.search) &&
          ele.vite_fees &&
          ele.vite_fees.includes(this.fsearch)
        );
      });
    },
  },
  created() {
    this.authUser = JSON.parse(localStorage.getItem("authUser"));
    this.getTripHistory();
    this.getDailyEarnings();
  },
  methods: {
    getTripHistory() {
      ref
        .doc(this.authUser.driverId)
        .get()
        .then((snapshot) => {
          this.tripsDetail = { ...snapshot.data() };
          const details = Object.values(this.tripsDetail);
          details.forEach((item, index) => {
            if (item.finalPrice) {
              this.tripsInfo.push({
                ...item,
                my_earnings: `${Math.ceil(
                  item.finalPrice - item.finalPrice * 0.1
                )}`,
                vite_fees: `${Math.ceil(item.finalPrice * 0.1)}`,
              });
            }
          });
        })
        .catch((error) => ({
          errorCode: error.code,
          errorMessage: error.message,
        }));
    },
    getDailyEarnings() {
      myEarningRef
        .doc(this.authUser.driverId)
        .get()
        .then((snapshot) => {
          this.dailyEarningDetail = { ...snapshot.data() };
        })
        .catch((error) => ({
          errorCode: error.code,
          errorMessage: error.message,
        }));
    },
  },
};
</script>
