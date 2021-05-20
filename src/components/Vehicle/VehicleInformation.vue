<template>
  <div>
    <el-dialog
      title="Update Vehicle Information"
      :visible.sync="dialogFormVisible"
    >
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
    };
  },
};
</script>
