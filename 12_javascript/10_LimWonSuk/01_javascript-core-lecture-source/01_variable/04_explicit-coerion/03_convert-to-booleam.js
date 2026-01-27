/* 논리 타입을 명시적으로 변환 */

// 1. Boolean 생성자 함수를 new 연산자 없이 호출
console.log(Boolean('JavaScript'));         // true 값이 있어서
console.log(Boolean(''));                   // false 값이 없어서
console.log(Boolean(1));                    // true
console.log(Boolean(0));                    // false
console.log(Boolean(NaN));                        // false
console.log(Boolean(Infinity));                   // true
console.log(Boolean(null));                 // false
console.log(Boolean(undefined));            // false
console.log(Boolean({}));                   // true 비어있지않다
console.log(Boolean([]));                   // true

// 2. !부정 논리 연산자를 두번 사용하는 방법
console.log('JavaScript'); // JavaScript
console.log(!'JavaScript'); // false
console.log(!!'JavaScript'); // true

console.log(''); // 그냥 빈칸
console.log(!''); // true
console.log(!!''); // false