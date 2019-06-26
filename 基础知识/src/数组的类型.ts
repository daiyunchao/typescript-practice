let arr1: number[] = [1, 2, 3]

//错误
let arr2: number[] = [1, 2, 3, '43']

let arr3: number[] = [1, 2, 3];

//正确,数据类型一致
arr3.push(7);

//错误,数据类型不相同
arr3.push('zhangsan');


//定义数组类型的第二种方式

let arr4: Array<number> = [1, 2, 3, 4, 5];


//定义数组类型的第三种方式 接口定义

//定义number类型的数组
interface NumberArray {
  [index: number]: number,//意思是要求index必须是number类型,而值必须是number类型
}

let arr5: NumberArray = [1, 2, 3, 4, 5]

//定义字符串类型的数组
interface StringArray {
  [index: number]: string,//意思是要求index必须是number类型,而值必须是string类型
}

let arr6: StringArray = ['12', '14', '3232', '21211'];


//定义可以传入如何类型的数组 any

let list: any[] = ['zhangsan', 18, { name: 'lisi' }];




