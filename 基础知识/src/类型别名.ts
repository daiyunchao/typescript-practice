
// 将string别名为str
// 将number别名为num
// 在声明一个 strornum的类型 对应的是 str和num的联合类型
//就可以在函数中使用strornum这个类型来代替 string|number
type str = string;
type num = number;
type strornum = str | num;
function getName(name: strornum): strornum {
  return ""
  return 0;
}


type Name = string;
//声明一个返回string的getName函数
type GetName = () => string;

type NameOrGetName = Name | GetName;

function getName2(n: NameOrGetName): Name {
  if (typeof n == 'string') {
    return n;
  }
  else if (typeof n == 'function') {
    return n();
  }
}