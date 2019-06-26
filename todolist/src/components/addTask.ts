import Vue from 'vue';
import gd from '../data/gd';
import Common from '../data/common';
import ToDoListItem from '../data/todolistitem';
export default {
  template: `
  <div class="add_task">
  <h3>添加任务:</h3>
  <input type="text" class="add_task_input" placeholder="请输入任务名称,回车添加" v-model="taskName" @keydown.enter="addTask()"/>
  </div>
  `,
  data() {
    return {
      taskName: ""
    }
  },
  methods: {
    addTask(): void {
      console.log("task name==>", this.taskName);
      let taskId: string = Common.randomString(16);
      let newItem = new ToDoListItem();
      newItem.id = taskId;
      newItem.name = this.taskName;
      newItem.is_complate = false;
      gd.list.push(newItem);
      //同步数据
      gd.syncLocalList();
      this.taskName = "";
    }
  }
}