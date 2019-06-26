// 如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型：

// 函数的合并
//函数的重载就是函数的合并
type NumOrStr = number | string;
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: NumOrStr): NumOrStr {
  return x;
}

//我认为泛型也是一种重载
function reverse2<T>(x: T): T {
  return x;
}
reverse2<number>(10);
reverse2<string>('zhangsan');



//接口之间的合并
//两个接口合并成了一个接口
interface Light {
  lightOn();
}

interface Light {
  lightOff();
}

class A implements Light {
  lightOn() {

  }
  lightOff() {

  }
}



//类的合并 类可以合并?

class AA {
  name:string;
}

class AA{
  age:number;
}

