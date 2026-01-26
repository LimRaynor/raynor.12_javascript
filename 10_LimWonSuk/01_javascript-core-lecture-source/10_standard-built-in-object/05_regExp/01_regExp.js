// 정규표현식(rehular Expression)
// - 일정한 패턴을 가진 문자열의 집합을 표현하는 표현 단어

// 검색 대상
const target = "JavaScript"

// 1. 정규 표현식 객체 생성 리터럴 - /pattern/flag
let regExp = /j/i; // /pattern== j /flag== i
// 패턴 : j, flag : i(ignore) == 대소문자 구분 무시

// regExp.test(문자열) : 문자열에 정규식과 매칭되는 부분이 있으면 true, 없으면 false
console.log(regExp.text(target)); // true

// 2. RegExp 생성자 함수 - new RegExp[pattern[, flag])
regExp = new RegExp('j', 'i');
regExp = new RegExp(/j/, 'i');
regExp = new RegExp(/j/i);          // ES6부터 가능한 표현
