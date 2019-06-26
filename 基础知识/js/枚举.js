// 定义枚举
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["yello"] = 1] = "yello";
    Colors[Colors["blue"] = 2] = "blue";
})(Colors || (Colors = {}));
//使用枚举
Colors.red;
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射
Colors.red == 0;
//给枚举的项手动赋值
var Colors2;
(function (Colors2) {
    Colors2[Colors2["red"] = 1] = "red";
    Colors2[Colors2["bule"] = 2] = "bule";
    Colors2[Colors2["yello"] = 10] = "yello";
})(Colors2 || (Colors2 = {}));
// 枚举两种类型
// 常数项 计算所得项
//常数项
var Colors3;
(function (Colors3) {
    Colors3[Colors3["red"] = 0] = "red";
    Colors3[Colors3["bule"] = 1] = "bule";
    Colors3[Colors3["yello"] = 2] = "yello";
})(Colors3 || (Colors3 = {}));
;
;
let arr = [0 /* Up */];
let _arr = [Colors.red];
