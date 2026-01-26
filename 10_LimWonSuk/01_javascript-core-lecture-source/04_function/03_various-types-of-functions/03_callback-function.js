/* 콜백 함수
* - 함수의 매개 변수를 통해
*  다른 함수의 내부로 전달되는 함수 == 콜백 함수
*
* - 매개 변수를 통해
*  함수의 외부에서 콜백 함수를 전달 받는 함수 == 고차 함수
* */

var increase = value => value + 1;
var decrease = value => value - 1;

/*
apply가 콜백 함수를 전달 받아 func에 저장함
    -> apply는 고차함수
    */
var apply = (func, value) => {
    return func(value);
}

/* increase 함수가 apply의 매개 변수로 전달됨
*   -> inrease = 콜백 함수*/
console.log(apply(increase, 4)); // 매개변수에 함수를 대입가능
console.log(apply(decrease, 4)); // 매개변수에 함수를 대입가능

console.log(apply( (value) => { return value * 5; } , 100));
/* 콜백 함수 자리에 직접 익명함수를 작성할 수도 있다 */
console.log(apply( value => value * 5 , 100));

/* -함수의 변하지 않는 공통 로직은 미리 정의해두고
*   경우에 따ㅣ라 변경되는ㄴ 로직은 추상화해서
*   함수 외부에서 내부로 전달하는 방식이다 
* 추상화가 됬다(유연성 확보,유지보수 용의) = 공통적인것만 뽑아서 틀을 만듬*/

var arr = [3, 1, 4, 5, 2];
console.log(arr.sort( (a, b) => a-b )); // 오름차순
console.log(arr.sort( (a, b) => b-a )); // 오름차순
