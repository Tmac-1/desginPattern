
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

// class Car {
//   constructor(number,name){
//     this.number = number;
//     this.name = name
//   }
// }

// class Kuaiche extends Car{
//   constructor(number,name){
//     super(number,name)
//     this.price = 1;
//   }
// }

// class Zhuanche extends Car{
//   constructor(number,name){
//     super(number,name)
//     this.price = 2;
//   }
// }

// class Trip {
//   constructor(car){
//       this.car = car
//   }
//   start(){
//       console.log(`车名 ${this.car.name} 车牌号 ${this.car.number}`)
//   }
//   end(){
//        console.log(`行程结束${this.car.price*5}元`)
//   }
// }

// let car = new Kuaiche('100','保时捷');
// let trip = new Trip(car);
// trip.start();
// trip.end()

// class Car{
//   constructor(num){
//     this.num = num
//   }
// }
// class Camera {
//   shot(car){
//     return {
//       num:car.num,
//       inTime:Date.now()
//     }
//   }
// }
// class Screen {
//   show(car,inTime){
//     console.log('车牌号',car.num)
//     console.log('停车时间',Date.now() - inTime)
//   }
// }
// class Park{
//    constructor(floors){
//      this.floors = floors || []
//      this.camera = new Camera()
//      this.screen = new Screen()
//      this.carList = {} // 存储摄像头返回的车辆信息
//    }
//    in(car){
//       const info = this.camera.shot(car)
//       const i = parseInt( Math.random() * 100 % 100 )
//       const place = this.floors[0].places[i]
//       place.in()
//       info.place = place
//       this.carList[car.num] = info;
//    }
//    out(car){
//       const info = this.carList[car.num]
//       const place = info.place
//       place.out()
//       this.screen.show(car,info.inTime)
//       delete this.carList[car.num]
//    }
//    emptyNum(){
//     return this.floors.map(floor=>{
//        return `${floor.index} 层还有 ${floor.emptyPlaceNum()} 个空闲车位`
//      }).join('\n')
//    }
// }

// class Floor{
//   constructor(index,places){
//     this.index = index
//     this.places = places || []
//   }
//   emptyPlaceNum(){
//      let num = 0;
//      this.places.forEach(p=>{
//        if(p.empty){
//          num = num + 1;
//        }
//      })
//      return num;
//   }
// }
// class Place{
//   constructor(){
//     this.empty = true
//   }
//   in(){
//     this.empty = false
//   }
//   out(){
//     this.empty = true
//   }
// }


// const floors = []
// for(let i=0;i<3;i++){
//   const places = [];
//   for(let j=0;j<100;j++){
//     places[j] = new Place()
//   }
//   floors[i] =  new Floor(i+1,places)
// }
// const park = new Park(floors)
// const car1 = new Car(100)
// const car2 = new Car(200)
// const car3 = new Car(300)

// console.log('第一辆车进入')
// console.log(park.emptyNum())
// park.in(car1)
// console.log('第二辆车进入')
// console.log(park.emptyNum())
// park.in(car2)
// console.log('第一辆车离开')
// park.out(car1)
// console.log('第二辆车离开')
// park.out(car2)

// console.log('第三辆车进入')
// console.log(park.emptyNum())
// park.in(car3)
// console.log('第三辆车离开')
// park.out(car3)

// 工厂模式
// class Product{
//   constructor(name){
//     this.name = name
//   }
//   init(){
//     alert('init')
//   }
//   fun1(){
//     alert('fun1')
//   }
//   fun2(){
//     alert('fun2')
//   }
// }

// class Creator{
//   create(name){
//     return new Product(name)
//   }
// }

// let creator = new Creator();
// let p = creator.create('p1')
// p.init()
// p.fun1()

// 单例模式
class SingleInstance{
  login(){
    console.log('...login')
  }
}

SingleInstance.getInstance = function(){
  let instance;
  return function(){
    if(!instance){
      instance = new SingleInstance()
    }
    return instance;
  }
}()

let In1 = SingleInstance.getInstance()
let In2 = SingleInstance.getInstance()
In1.login()
In2.login()
console.log('in1===in2',In1 === In2)










































































































