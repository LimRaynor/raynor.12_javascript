// 나머지 매개 변수 (== java의 가변 인자)
// 가변인자 == printF 등등...

// 호출해서 출력받은 인자를
 function merge(msg1, msg2){
    return msg1 + msg2
 }

console.log(merge("하이요"));
console.log(merge("하이요", "반갑쓰"));
console.log(merge("하이요", "반갑쓰", "밥 ㄱ"));
// -> 미만인 매개 변수는 undefined, 초과된 인자는 매개변수 저장이 안된다

// ... 전개 연산자
// ... 매개 변수 === 가변 인자
// -> 모든 전달 인자를 저장한 배열의 형태
function mergeAll(...args){
    let msg = '';
    for(let arg of args){
        msg += arg + " 띄 어 쓰 기" ;
    }
    return msg;
}


console.log(mergeAll("안녕하세요"));
console.log(mergeAll("안녕하세요", "반갑습니다"));
console.log(mergeAll("안녕하세요", "반갑습니다", "식사하실래요?"));

