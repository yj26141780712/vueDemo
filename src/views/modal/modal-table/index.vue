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
      <el-table
        :data="tableData"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column prop="date" label="日期" sortable width="180">
          <template slot-scope="scope">
            <el-select v-model="scope.row.date" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" sortable width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.name"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "@/components/modal";

export default {
  name: "pageModal",
  components: { Dialog },
  data() {
    return {
      title: "新增表单",
      show: false,
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          children: [
            {
              id: 31,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄",
            },
            {
              id: 32,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄",
            },
            {
              id: 33,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄",
            },
          ],
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
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
