/*
1-1. 전달 받은 문자열(str) 안에 있는 값을 ',' 기준으로 배열로 분리하고
 전달받은 단어(word)가 있는 index 위치를 문자열로 리턴하는 함수
  findWord(str, word)를 작성한다.*/

const str = '사과,바나나,당근,김밥,치즈,떡볶이,햄버거,환타,사이다,콜라,고양이,강아지';

console.log(findWord(str, '고양이'));
console.log(findWord(str, '샌드위치'));
console.log(findWord(str));

function findWord(str, word) {
    // 코드 작성

    console.log(str.slice(','));
   console.log(findWord(str, '고양이'))
   console.log(findWord(str, '샌드위치'))
}

/*
1-2. 배열(arr)의 요소 중 a와 b 사이에 속하지 않는 요소는
삭제해주는 함수 filterRange(arr, a, b)를 작성한다.
*/

function filterRange(arr, a, b) {
    // 코드 작성

}

const arr = [5, 3, 8, 1, 10, 4];

filterRange(arr, 1, 5);

console.log(arr);


/*
1-3. 제시 된 숫자값 배열과 문자값 배열을 오름차순 정렬,
 내림차순 정렬하여 출력한다.*/
