/*
1-1. 전달 받은 문자열(str) 안에 있는 값을 ',' 기준으로 배열로 분리하고
 전달받은 단어(word)가 있는 index 위치를 문자열로 리턴하는 함수
  findWord(str, word)를 작성한다.*/


const str = '사과,바나나,당근,김밥,치즈,떡볶이,햄버거,환타,사이다,콜라,고양이,강아지';

console.log(findWord(str, '햄버거'));
console.log(findWord(str, '샌드위치')); // 워드 진위
console.log(findWord(str));// 워드가 있냐없냐

function findWord(str, word) { // 선언

 let arr = str.split(',');

 let indexOf = arr.indexOf(word);

 if (word === undefined){
    return  "결과를 확인할 수 없습니다."
 }
 if 
}
