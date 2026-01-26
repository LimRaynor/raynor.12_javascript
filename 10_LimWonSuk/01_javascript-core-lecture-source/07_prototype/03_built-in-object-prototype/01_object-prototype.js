// Object는 내장 객체 생성자 함수인데 이 생성자 함수의 prototype은
// toString을 비롯해서
// 다양한 메소드가 구현된 거대한 객체를 참조한다.
// new Object(), {} 를 사용해 객체를 만들때
// 만들어진 객체의 [[Prototype]]은 Object.prototype을 참조한다.

const obj = {};
// 모두 object로부터 받아온 객체이다
console.log(obj.__proto__ == Object.prototype); // 함수면 Prototype , 객체면 __proto__
console.log(obj.toString === obj.__proto__.toString);
console.log(obj.toString === Object.prototype.toString);