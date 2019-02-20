import { callbackify } from "util";

// class People{
//     constructor(name,age){
//       this.name = name
//       this.age = age
//     }
//     eat(){
//        alert(`${this.name} eat something`)
//     }
//     speak(){
//       alert(`My name is ${this.name}, age ${this.age}`)
//     }
// }

// let zhang  = new Person('zhang','20');
// zhang.eat()
// zhang.speak()

// let wang = new Person('wang','21')
// wang.eat()
// wang.speak()

// class Student extends People{
//   constructor(name,age,number){
//     super(name,age)
//     this.number = number
//   }
//   study(){
//     alert(`${this.name} study`)
//   }
// }

// let xiaoming = new Student('xiaoming','10','A1')
// xiaoming.study()
// xiaoming.eat()
// let xiaohong = new Student('xiaohong','11','A2')
// xiaohong.study()
// xiaohong.speak()


// class Jquery{
//   constructor(selector){
//     let slice = Array.prototype.slice;
//     let dom = slice.call(document.querySelectorAll(selector));
//     let len = dom ? dom.length : 0 ;
//     for(let i=0;i<len;i++){
//       this[i] = dom[i]
//     }
//     this.length = len
//     this.selector = selector || '';
//   }
//   append(node){
//     //...
//   }
//   addClass(name){
//     //...
//   }
//   html(data){

//   }
// }

// window.$ = function(selector){
//   return new Jquery(selector)
// }

// let $p = $('p')
// console.log($p);
// console.log($p.addClass)


// function loadImg (src){
//   let promise = new Promise((resolve,reject)=>{
//       let img = document.createElement('img')
//       img.onload = ()=>{
//         resolve(img)
//       }
//       img.onerror = ()=>{
//         reject('图片加载失败')
//       }
//       img.src = src
//   })
//   return promise
// }

// let result = loadImg('https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKmB1DWZP1l7Q9NPNFNFopPTYQrG1JFyTDs0K5icVrWoZDjxjyVmnwnkuSiakxnOVNzXJZtaU0AsnlA/132')
// result.then((img)=>{
//   alert(`width: ${img.width}`)
//   return img
// }).then((img)=>{
//   alert(`height: ${img.height}`)
// }).catch((error)=>{
//   alert(error)
// })

class Car {
  constructor(number,name){
    this.number = number;
    this.name = name
  }
}

class Kuaiche extends Car{
  constructor(number,name){
    super(number,name)
    this.price = 1;
  }
}

class Zhuanche extends Car{
  constructor(number,name){
    super(number,name)
    this.price = 2;
  }
}

class Trip {
  constructor(car){
      this.car = car
  }
  start(){
      console.log(`车名 ${this.car.name} 车牌号 ${this.car.number}`)
  }
  end(){
       console.log(`行程结束${this.car.price*5}元`)
  }
}

let car = new Kuaiche('100','保时捷');
let trip = new Trip(car);
trip.start();
trip.end()

















































