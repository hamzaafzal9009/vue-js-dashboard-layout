<template>
  <div>
    <h3>Documents</h3>
    <el-row :gutter="20">
      <el-col :md="8" v-for="(item, index) in documents" :key="index">
        <el-card class="box-card" shadow="always">
          <el-row :gutter="20">
            <el-col :md="12">
              <div class="o-card-title-3">
                {{ item.title }}
              </div>
            </el-col>
            <el-col :md="12">
              <div class="o-card-title-3">
                <el-button
                  icon="el-icon-edit"
                  class="float-right"
                  circle
                  @click="openImageDialog(item, 'isProfile')"
                ></el-button>
              </div>
            </el-col>
          </el-row>
          <br />
          <el-row :gutter="20">
            <el-col :span="24">
              <el-image
                :src="authUser[item.value]"
                class="height-250"
                fit="fit"
              >
                <div slot="placeholder" class="image-slot">
                  Loading<span class="dot">...</span>
                </div>
              </el-image>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <br />
    <el-row :gutter="20">
      <el-col :md="8" v-for="(item, index) in vehicleDocs" :key="index">
        <el-card class="box-card" shadow="always">
          <el-row :gutter="20">
            <el-col :md="12">
              <div class="o-card-title-3">
                {{ item.title }}
              </div>
            </el-col>
            <el-col :md="12">
              <div class="o-card-title-3">
                <el-button
                  icon="el-icon-edit"
                  @click="openImageDialog(item, 'isVehicle')"
                  class="float-right"
                  circle
                ></el-button>
              </div>
            </el-col>
          </el-row>
          <br />
          <el-row :gutter="20">
            <el-col :span="24">
              <el-image
                :src="
                  vehicleDetail[item.value]
                    ? vehicleDetail[item.value]
                    : vehicleDetail[item.nextValue]
                "
                class="height-250"
                fit="fit"
              >
                <div slot="placeholder" class="image-slot">
                  Loading<span class="dot">...</span>
                </div>
              </el-image>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <image-upload
      v-if="imageDialog"
      v-model="imageName"
      :resize="false"
      :title="title"
      @close="imageDialog = false"
      @imageName="imageName = $event"
      @input="updateProfileImage"
    >
    </image-upload>
  </div>
</template>
<script>
import ImageUpload from "./DocumentsComponents/ImageUpload";
import { EventService } from "../main.js";
import firebase from "../plugins/firebase";
import "firebase/storage";
const db = firebase.firestore();
const refVehicle = db.collection("vehicles");
const refDrivers = db.collection("drivers");
export default {
  components: { ImageUpload },

  data() {
    return {
      title: "",
      openProfileEditForm: false,
      authUser: {},
      vehicleDetail: {},
      imageDialog: false,
      imageUrl: "",
      imageName: "",
      currentFile: "",
      currentIndex: 0,
      formValues: {},
      documents: [
        {
          title: "Driver Photo",
          value: "driverAvatarUrl",
          name: "profilePhoto",
          src: "https://cdn.vuetifyjs.com/images/cards/store.jpg",
        },
        {
          title: "National Id",
          value: "driverIDUrl",
          name: "driver_id",
          src: "https://cdn.vuetifyjs.com/images/cards/store.jpg",
        },
        {
          title: "Driver License",
          value: "driverLicenseUrl",
          name: "driver_license",
          src: "https://cdn.vuetifyjs.com/images/cards/store.jpg",
        },
      ],
      currentValue: [],
      loading: false,
      vehicleDocs: [
        {
          title: "Vehicle Photo",
          value: "vehicleAvatarUrl",
          path: "vehicles/",
          src: "https://cdn.vuetifyjs.com/images/cards/store.jpg",
        },
        {
          title: "PSV Taxi License",
          value: "vehicleLicenseUrl",
          nextValue: "vehicleLicense",
          path: "vehicleLicense/",
          src: "https://cdn.vuetifyjs.com/images/cards/store.jpg",
        },
        {
          title: "Proof of Insurance",
          value: "proofOfInsuranceUrl",
          path: "vehiclesdocs/",
          src: "https://cdn.vuetifyjs.com/images/cards/store.jpg",
        },
      ],
      currentType: "",
      items: [
        {
          text: "Dashboard",
          disabled: false,
          href: "/dashboard",
        },
        {
          text: "Documents",
          disabled: true,
          href: "breadcrumbs_link_1",
        },
      ],
      currentName: "",
      currentPath: "",
    };
  },
  created() {
    this.authUser = JSON.parse(localStorage.getItem("authUser"));
    this.getVechicleInfo();
  },
  methods: {
    openImageDialog(detail, type) {
      this.title = detail.title;
      this.imageDialog = true;
      this.currentValue = detail.value;
      this.currentType = type;
      this.currentName = detail.name;
      this.currentPath = detail.path;
    },
    getVechicleInfo() {
      EventService.$emit("loading", "show");
      firebase
        .firestore()
        .collection("vehicles")
        .doc(this.authUser.driverId)
        .get()
        .then((snapshot) => {
          EventService.$emit("loading", "hide");
          this.vehicleDetail = { ...snapshot.data() };
        })
        .catch((error) => ({
          errorCode: error.code,
          errorMessage: error.message,
        }))
        .finally(() => EventService.$emit("loading", "hide"));
    },
    updateProfileImage(image) {
      this.imageUrl = URL.createObjectURL(image);

      this.imageDialog = false;
      if (this.currentType === "isProfile") {
        this.updateDriversImage(image, this.currentValue, this.currentName);
      } else {
        this.updateVechicleDocs(image, this.currentValue, this.currentPath);
      }
    },
    updateDriversImage(image, value, name) {
      EventService.$emit("loading", "show");
      firebase
        .storage()
        .ref("/drivers/" + this.authUser.driverId + "/" + name)
        .put(image, { contentType: `image/jpg` })
        .then((snapshot) => {
          snapshot.ref.getDownloadURL().then((url) => {
            refDrivers
              .doc(this.authUser.driverId)
              .update({ [value]: url })
              .then((response) => {
                EventService.$emit("loading", "hide");
                EventService.$emit("successMessage", "Successfully Updated");
                this.driversInfo();
              });
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    driversInfo() {
      EventService.$emit("loading", "show");
      firebase
        .firestore()
        .collection("drivers")
        .doc(this.authUser.driverId)
        .get()
        .then((snapshot) => {
          this.$nextTick(() => {
            localStorage.setItem("authUser", JSON.stringify(snapshot.data()));
            this.authUser = JSON.parse(localStorage.getItem("authUser"));
          });
        })
        .catch((error) => ({
          errorCode: error.code,
          errorMessage: error.message,
        }))
        .finally(() => EventService.$emit("loading", "hide"));
    },
    updateVechicleDocs(image, value, path) {
      if (this.loading) return;
      this.loading = true;
      firebase
        .storage()
        .ref(path + this.authUser.driverId)
        .put(image, { contentType: `image/jpg` })
        .then((snapshot) => {
          snapshot.ref.getDownloadURL().then((url) => {
            refVehicle
              .doc(this.authUser.driverId)
              .update({ [value]: url })
              .then((response) => {
                this.setNotifyMessage("Successfully Upload docs");
                this.getVechicleInfo();
              });
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
.float-right {
  float: right;
}
.height-250 {
  height: 250px;
}
</style>
