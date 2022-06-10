<template>
  <el-dialog :title="title" :visible.sync="visible" :before-close="handleClose">
    <div class="modal-body" style="max-height: 50vh; overflow: auto">
      <slot></slot>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancle">取 消</el-button>
      <el-button type="primary" @click="confirm">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "yjDialog",
  props: {
    title: {
      type: String,
      default: "标题",
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: this.show,
      loading: null,
    };
  },
  methods: {
    cancle() {
      this.$emit("cancle");
    },
    confirm() {
      this.$emit("confirm");
    },
    handleClose() {
      this.close();
      this.$emit("handleClose");
    },
    close() {
      this.visible = false;
    },
    showLoading() {
      this.loading = this.$loading({
        target: ".el-dialog__body",
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(255, 255, 255, 0.7)",
      });
    },
    closeLoading() {
      if (this.loading) {
        this.loading.close();
        this.loading = null;
      }
    },
  },
  created() {},
};
</script>
