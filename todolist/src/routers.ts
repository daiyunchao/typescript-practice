import VueRouter from 'vue-router';
import Header from './components/header';
import AddTask from './components/addTask';
import TaskList from './components/taskList';
import TaskStatus from './components/taskStatus'; 
import taskStatus from './components/taskStatus';
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: '',
      components: {
        header:Header,
        addTask:AddTask,
        taskList:TaskList,
        taskStatus:taskStatus
      }
    }
  ]
})