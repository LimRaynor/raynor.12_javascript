// 변수 하나 선언
var str1;

/* 문자열(string) 변수 선언 방법 */
str1 = "Javascript"; // "" == string
str1 = 'Javascript'; // '' == sting
str1 = `Javascript`; // `` (템플릿 리터럴) == sting

console.log(str1);

/* 템플릿 리털러 ``(벡틱)
* - ES6 부터 도입
* - 멀티라인 문자열, 표현식 삽입이 가능함
* */
var str2 = `안녕하세요
    반갑습니다
     이제 공부하세요`;

console.log(str2)

var lastName = `홍`;
var firstName = `킬동`;

console.log(" 제 이름은: " + lastName + firstName + "입니다.")
console.log(`제 이름은 ${lastName}${firstName} 입니다`)
