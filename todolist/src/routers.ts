import VueRouter from 'vue-router';
import Header from './components/header';
import AddTask from './components/addTask';
import TaskList from './components/taskList';
import TaskStatus from './components/taskStatus';
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: '',
      components: {
        Header,
        AddTask,
        TaskList,
        TaskStatus,
        default: {
          template: `
          <div>
            <Header/>
            <AddTask/>
            <TaskStatus/>
            <TaskList/>
          </div>
          `
        }
      }
    }
  ]
})