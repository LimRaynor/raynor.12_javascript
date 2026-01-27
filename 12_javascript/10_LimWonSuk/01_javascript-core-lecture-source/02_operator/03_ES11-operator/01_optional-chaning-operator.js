/* 옵셔널 체이닝 연산자(ES11 (2020)에 추가)
* - 좌항의 피연산자가 null 또는 undefined인 경우 undefined 반환
*  - 좌항이 Truthy한 경우 우항을 반환
* */

/*
1) ||
t -> 좌항
f ->  우항
2) &&
t -> 우항
f -> 좌항*/

/* obj가 null인 경우*/
var obj = null;

//var val = obj.value; // Cannot read properties of null == null ponit inception
var val = obj?.value;
console.log(`val : ${val}`); // undefined

/* obj가 값이 있는 경우*/
obj = {value:100};
val = obj?.value;
console.log(`val : ${val}`); // 100



/* 단축 평가와 옵셔널 체이닝의 차이를 잘 구분해서 사용하자!*/
var str = '';

/* 옵셔널 체이닝
* - str이 null 또는 undefined가 아니기 때문에 "우항" 반환
* */
var len1 = str?.length;
console.log(`len1 : ${len1}`); // 0

/* 단축 평가 &&
* - str이 ''(빈문자열)이기 때문에 Falsy하다고 판단되어 "좌항" 반환
* */
var len2 = str && str.length;
console.log(`len2 : ${len2}`); // ''

