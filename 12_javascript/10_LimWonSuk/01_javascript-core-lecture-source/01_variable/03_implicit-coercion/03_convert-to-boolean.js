/* 논리 타입으로 암묵적 변환 */
// - JS 엔진은 boolean타입이 아닌 값을
// Truthy값(참으로 평가되는 값) 또는 Falsy(거짓으로 평가되는 값)을 구분한다.

//  if (조건문) { 조건문이 참일때 수행 할 코드; }

/* 기억 할 것
* 1) Falsy == false : undefined, null, 0, NaN, ...
* 2) Truthy(true) : 나머지 다
* */

if(undefined){ // undefined -> Falsy == false
    console.log("if(undefined)");
}

if(null){ // null -> Falsy == false
    console.log("if(null)");
}

if(0){ // 0 -> Falsy == false
    console.log("if(0)");
}

if(1){ // 1 -> Truthy == ture
    console.log("if(1)");
}

if(NaN){ // NaN -> Falsy == false
    console.log("if(NaN)");
}

if(''){ // '' -> Falsy == false
    console.log("if('')");
}

if('apple'){ // 'apple' -> Truthy == ture
    console.log("if('apple')");
}

if([]){// [] -> Truthy == true
    console.log("if([])");
}

if({}){// {} -> Truthy == true
    console.log("if({})");
}

if(Symbol()){ // Symbol -> Truthy == ture
    console.log("if(Symbol())");
}


// 2. 템플릿 리터럴 표현식 삽입
console.log(`10 + 20 : ${10 + 20}`);
// -> '10 + 20 : ' + 30
// -> '10 + 20 : ' + '30'
// -> '10 + 20 : 30'
