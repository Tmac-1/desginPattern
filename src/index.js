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


class Jquery{
  constructor(selector){
    let slice = Array.prototype.slice;
    let dom = slice.call(document.querySelectorAll(selector));
    let len = dom ? dom.length : 0 ;
    for(let i=0;i<len;i++){
      this[i] = dom[i]
    }
    this.length = len
    this.selector = selector || '';
  }
  append(node){
    //...
  }
  addClass(name){
    //...
  }
  html(data){

  }
}

window.$ = function(selector){
  return new Jquery(selector)
}

let $p = $('p')
console.log($p);
console.log($p.addClass)














