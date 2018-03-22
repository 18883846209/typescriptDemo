import 'babel-polyfill';
// import './css/common.css';
// import './sass/index.scss';

// 布尔值
let isTrue: boolean = false;

// 数字
let num: number = 12;

// 字符串
let str: string = 'ssss';

// 数组常用(在类型后面跟上[])
let arr: number[] = [1, 34]; // 数组里面的元素只能是数字

// 数组泛型(Array<>)    可在<>里面指定数组的元素类型
let listNum: Array<number> = [1, 67];
let listStr: Array<string> = ['aa', 'nn'];

// any类型(常用于对现有代码进行改写)   可以赋值任意类型
let random: any = 5;

// void(表示没有任何类型)   常用于声明没有返回值的函数
function sayHi(): void {
	console.log('Hi');
}

// null undefined默认情况下是所有类型的子类型(通常可以将null、undefined赋值给各种类型的变量)
let u: undefined = undefined;
let n: null = null;
let num1: number = undefined;
let str1: string = null;

// 元组tuple(通常用于表示一个已知数量和类型的数组, 数组元素的类型可以不用相同)
let tuple: [string, number];
tuple = ['34', 12];

// 类型断言(类似于类型转换)
let str2 = 'this is typescript';
let len: number = (<string>str2).length; // <>尖括号语法
let len1: number = (str2 as string).length; // as语法
console.log(len);


