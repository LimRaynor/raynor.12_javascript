/* in  연산자 : 객체 내 프로퍼티 존재 여부 를 확인 하는 연산자 */
var student = {
    name : "홍킬동",
    age : 16,
    test : undefined  // undefined 변수에 값이 대입되지않았다(type == undefined자체가 타입)
}

// student.name의 값이 대입되어 있는지 확인
console.log(student.name === undefined) // false
console.log(student.age === undefined) // false

// student.name는 프로퍼티가 존재하지만 값이 undefined로
// 프로퍼티는 있지만 대입된 값이 없는 상태 (모호한 상태)
console.log(student.test === undefined) // true

// student 객체 내부에 key값이 "name"인 프로퍼티가 있는지 확인
console.log("name" in student); // true
console.log("age" in student); // true
console.log("test" in student); // true
console.log("test2" in student); // false