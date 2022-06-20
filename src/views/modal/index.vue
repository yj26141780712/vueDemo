<template>
  <div class="home">
    <el-button @click="open">打开表单</el-button>
    <Dialog
      ref="dialog"
      v-if="show"
      :title="title"
      :show="show"
      @handleClose="handleClose"
    >
      <ModalForm></ModalForm>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "@/components/modal";
import ModalForm from "@/views/modal/modal-form";
export default {
  name: "pageModal",
  components: { Dialog, ModalForm },
  data() {
    return {
      title: "新增表单",
      show: false,
    };
  },
  methods: {
    getApi() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
    },
    open() {
      this.title = "新增表单";
      this.show = true;
      this.$nextTick(async () => {
        const dialog = this.$refs.dialog;
        dialog.showLoading();
        await this.getApi();
        dialog.closeLoading();
      });
    },
    handleClose() {
      this.show = false;
    },
  },
};
</script>
