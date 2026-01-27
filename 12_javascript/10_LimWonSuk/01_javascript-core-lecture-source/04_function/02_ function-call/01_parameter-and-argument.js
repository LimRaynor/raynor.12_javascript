// parameter(매개 변수)-선언부와 argument(전달 인자)-호출
function hello(name){
    // Arguments
 // 함수 호출 시 전달된 인수를 참조할 수 있다
    console.log("arguments", arguments);
    console.log(arguments[1]);
    return `${name}님 안녕하세요`;
}

/* JS는 매개 변수의 개수와 관계엇이 전달 인자의 수를 임의로 지정가능 */
hello(); // undefind
hello("홍킬동");
hello("김밥맨", "떡볶이"); // 1번은 들어가는데 2번부터는 저장없이 출력만가능
hello("김밥맨", "떡볶이", "빵빵이");

var result = hello();
var result2 = hello("홍킬동");
var result3 = hello("홍킬동", "김밥맨");

console.log("result ; ", result, result2, result3)

/* 매개 변수 기본 값 설정
* - 매개 변수에 값이 전달되지 않거나 undefined인 경우
*   설정한 기본 값이 대입되도록 할 수 있다
* */
function hi(name = "언디피 멈춰"){
    return `${name} 하이하이`;
}

console.log(hi("정병진"));
console.log(hi());
console.log(hi(undefined));

