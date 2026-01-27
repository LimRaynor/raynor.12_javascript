/* 01_Number
표준 빌트인 객체인 Number는
원시 타입인 숫자를 다룰 때 유용한 프로퍼티와 메서드를 제공한다. */

/* Number 생성자 함수 */
const obj = new Number();
console.log(obj, typeof obj);

const obj2 = new Number(1);
console.log(obj2, typeof obj2);

const obj3 = new Number('number');
console.log(obj3, typeof obj3);

const obj4 = new Number("1");
console.log(obj4, typeof obj4);

/* new 연산자를 사용하지 않고 Number 호출 하기
* -> Number 인스턴스 생성 X, number 타입으로 파싱
*   --> 명시적 형변환 시 사용 */

const obj5 = Number('123');
console.log(obj5, typeof obj5);
