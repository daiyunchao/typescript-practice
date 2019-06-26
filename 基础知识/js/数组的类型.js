let arr1 = [1, 2, 3];
//错误
let arr2 = [1, 2, 3, '43'];
let arr3 = [1, 2, 3];
//正确,数据类型一致
arr3.push(7);
//错误,数据类型不相同
arr3.push('zhangsan');
//定义数组类型的第二种方式
let arr4 = [1, 2, 3, 4, 5];
let arr5 = [1, 2, 3, 4, 5];
let arr6 = ['12', '14', '3232', '21211'];
//定义可以传入如何类型的数组 any
let list = ['zhangsan', 18, { name: 'lisi' }];
