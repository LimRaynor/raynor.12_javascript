// strict-mode 미적용

function test() {
    x = 10;
}

test();
// 개발자의 의도와 관계없이 암묵적으로 선언된 전역 변서는
// 잠재적 오류 발생 원인이 될 수 있다.
// -> ES5 부터 strict-mode가 추가되었다.
console.log("x : ", x); // 정상적이면 말이 안되는 상태  (암묵적으로 "전역 변수"로 선언됨)