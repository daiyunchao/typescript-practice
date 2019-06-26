import ToDoListItem from './todolistitem';


enum taskStatus { allTask = 1, notComplate = 2, complate = 3 };

interface Types {
  type: taskStatus;
}

class GD {

  list: ToDoListItem[] = [];

  show_type: Types = { type: taskStatus.allTask }

  constructor() {
    this.getListFromLocal();
  }

  getListFromLocal(): void {
    let listStr = localStorage.getItem("vue_to_do_list");
    if (listStr) {
      let localList = JSON.parse(listStr);
      let tempList: ToDoListItem[] = [];
      for (let index = 0; index < localList.length; index++) {
        const element = localList[index];
        let todolistItem = new ToDoListItem();
        let { id, name, is_complate } = element;
        todolistItem.id = id;
        todolistItem.name = name;
        todolistItem.is_complate = is_complate;
        tempList.push(todolistItem);
      }
      this.list = tempList;
    } else {
      this.list = [];
    }
  }

  syncLocalList(): void {
    localStorage.setItem("vue_to_do_list", JSON.stringify(this.list))
  }
}

export default new GD();