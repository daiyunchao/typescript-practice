//如果没有指定类型,TypeScript会根据类型推论,推断一个类型出来
//没有给name1一个具体的类型,但typescript推论出类型是 string 等价于 let name1:string='zhangsan'
let name1 = 'zhangsan';
//如果我将上一个变量赋值成一个number类型,就会保存,因为name1已经被推论出了是string类型,但我们赋值了一个number类型
name1 = 4;
//如果只声明了变量但没赋值,则typeScript无法推论一个类型出来,只能认为这个值任何类型都可以赋值
let name2;
//正确,name2 此时是没有类型的
name2 = 'zhangsan';
name2 = 12;
