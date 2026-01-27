/* 화살표 함수 기본문법
*
* - ES6에서 도입된 익명 함수 작성법
* - 기존 함수 선언 방법보다 간략하게 작성이 가능하다
* */

/* 기본 함수 표식*/
var message = function (){
    return "hello world";
}
console.log(message());

/* 화살표 함수 */
message = () => {
    return "Arrow Function";
}
console.log(message())

/* {}안에 한줄만 있을경우
*   -> {} 생략
*       -> return 구문이면 retur도 생략 가능
* */
var testFn = function (){ // 익명함수 생성
    console.log("기존 함수 선언방법");
};
console.log(testFn());

// 화살표 함수로 변경
testFn = () =>
    console.log("화살표 함수 선언방법");
testFn();

// return 생략
var getName = () => {
    return "홍킬동";
}

// return 생략
var getName = () => "홍킬동";
console.log(`getName() : ${getName()}`);

// 매개 변수가 없거나 2개 이상인 경우
//   -> () 생략불가
var calc1 = (a, b) => a + b;
console.log(calc1(10, 30)); // 40

// 매개 변수가 없거나 1개인 경우
//   -> () 생략가능
var calc2 = (num =>  num * 2 )
console.log(calc2(123)); // 245

