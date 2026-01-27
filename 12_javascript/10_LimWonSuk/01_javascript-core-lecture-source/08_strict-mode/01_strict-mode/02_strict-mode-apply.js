// strict-mode 적용

// 1. 전역에 stirict-mode 적용
// -> var, let, const 변수 선언 키워드가 누락되면 변수로 인식 X

// "use strict"; // 적용 코드 무조건 첫줄에 적음
// x = 20;

function test() {

    // 2. 함수 레벨로 strict mode 설정 == 이 함수 내에서만 엄격모드 설정 하겠다
    "use strict";
    x = 10; // ReferenceError: x is not defined == 선언이 안되어있다
}

// test();

function test2(){
    x = 30;
}
test2();

console.log("x : ", x);

/*
* 전역에 엄격모드를 적용하면 스크립트 태그 단위로 적용되어 strict mode와 non strict mode의
* 혼용으로 인한 오류가 발생할 수 있으멩 유의한다.
* <script>
*   'use strict';
* </script>
* <script>
*    x = 10;   // 엄격 모드 적용 x, 에러 발생 x
* </script>
* */


// 화면 ㄹ호딩이 끝난후 실행하라(엄격모드)
// window.addEventListener("DOMContentLoaded", ()=>{
//   'use strict';
// });

// 3`rd 라이브러리 non strict mode인 경우
// 즉시 실행 함수로 스크립트 전체를 감싸서
// 스코프를 구분하고, 즉시 실행 함수에 stirct mode 를 적용 한다
(function(){
    /* strict mode 적용 */
    "use strict"
   //  temp = 100;  stirct mode 라 안됨
    const temp = 100;
    console.log("temp : ", temp);

})();

(function(){
    /* strict mode 미적용 서드파티 라이브러리 */
    temp = 200;
    console.log("non-strict temp : ", temp);

})();
