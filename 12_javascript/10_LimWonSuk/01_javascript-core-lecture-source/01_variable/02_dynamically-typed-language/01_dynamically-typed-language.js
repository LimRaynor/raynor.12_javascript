/* JS 는 동적 타입 언어이다. == 데이터가 저장되는 순간에 저장
* - 데이터 타입을 사전에 선언하지 않는다.
* - 변수에 할당된 값에 의해서 타입이 결정된다.
* - 변수에 값이 재할당 될 떄마다 타입이 다시 결정됨.
* */

var test;
console.log(test, typeof test); // 값이 대입된 적이없으니 초기에는 undefined undefined

test = 1;
console.log(test, typeof test); // 1 number

test = true;
console.log(test, typeof test); // true boolean

test = null;
console.log(test, typeof test) // null object <-- null은 원래 별도 타입으로 구분되어야하지만
// JS 첫 번째 버전의 버그로 인해 null의 타입이 object로 구분되고 있음.
//  -> 기존 코드의 영향을 미칠 수 있어서 버그임지만 아직 수정되지 못하고 있음.(이미 나오고나서 많은 개발이 이뤄짐)

test = {}; // JS 객체
console.log(test, typeof test);

test = []; // JS 배열
console.log(test, typeof test);

test = function(){}; // 함수 , funcrtion은 object의 한 종류
console.log(test, typeof test);

