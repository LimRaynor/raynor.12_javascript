/*
1-2. 배열(arr)의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수 filterRange(arr, a, b)를 작성한다.

- 힌트 : splice
*/

function filterRange(arr, a, b) {
    // 코드 작성
// Array.prototype.reverse : 배열의 순서를 뒤집음
// ->  역순 변경
    console.log('[1,2,3,4,5].reverse():', [5, 3, 8, 1, 10, 4].reverse());
}

const arr = [5, 3, 8, 1, 10, 4];

filterRange(arr, 1, 5);

console.log(arr);
;'' +
''