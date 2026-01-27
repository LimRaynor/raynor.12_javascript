/* 즉시 실행 함수 */
/*
* - 함수의 정의와 동시에 즉시 호출되는 함수 (정의만하면 바로 실행 가능)
* -  단 한번만 호출 가능하다 (다시호출 불가)
* - 반드시 ()로 함수 정의부분을 감싸야한다
* */

/*function test(){
    console.log("난 만들어지자마자 즉시 실행 된다 신기하지? ")
}
console.log(test())*/

/* 즉시 실헹 함수로 변경ㄹ*/
    (function(){
    console.log("난 만들어지자마자 즉시 실행 된다 신기하지? ")
})();

(() => {
    console.log('즉시 실행 함수 테스트');
})();

((name) => {
    console.log(`name : ${name}`);
})("홍킬동");

/* 즉시 실행 함수는 왜 사용할까?
* - 혹시 모를 변수명 충돌 문제를 방지할때 주로 사용
* */
var naem = "김밥맨";
console.log(`전역 name : ${name}`);

(() => {
    var name = "홍킬동";
    console.log(`즉시 실행 함수 name : ${naem}`);
})();