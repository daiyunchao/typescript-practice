// 定义枚举
enum Colors { red, yello, blue }

//使用枚举
Colors.red

// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射

Colors.red == 0

//给枚举的项手动赋值
enum Colors2 { red = 1, bule = 2, yello = 10 }


// 枚举两种类型
// 常数项 计算所得项

//常数项
enum Colors3 { red, bule, yello };


// 常量枚举 const enum
const enum Directions { Up, Down, Left, Right };
let arr: number[] = [Directions.Up];
let _arr:number[]=[Colors.red];