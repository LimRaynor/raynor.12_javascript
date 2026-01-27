
/*
Collection(크기제한x, 타입제한x) -> List -> LinkedList

JS 배열 == LinkedList 형태의 객체(우리가 보던 [] 형태가아님  즉, JS에서 {}은 객체이다*/

/* 배열 생성 */
// 1. 배열 리터럴([])을 이용한 생성 (권장)
const arr = ["바나나", "복숭아", "키위"];
console.log(arr);
// arr = []; // const로 선언된 배열은 변경 X
// arr[0] = '딸기';  // 대신 요소 변경은 가능, 덮어쓰기만 됨 내용변경은 x

// 2.배열 생성자 함수를 이용한 생성
const arr2 = new Array();
console.log("arr2 : ", arr2);

// 배열에 길이를 지정한 상태로 생성
const arr3 = new Array(10);
console.log("arr3 : ", arr3);

const arr4 = new Array(1, 2, 3);
console.log(" arr4 : ", arr4 );

// 3. Array.of() 메서드
console.log(Array.of(10));
console.log(Array.of(1, 2, 3));
console.log(Array.of("hello", 123, {name:"홍길동"},true));
// JS {}== 객체, 객체 == Key : Value 로 이루워저 있음

/* 배열은 인덱스를 이용해서 요소 접근 가능 */
console.log("arr : ", arr);
console.log("arr[0] : ", arr[0]);
console.log("arr[1] : ", arr[1]);
console.log("arr[2] : ", arr[2]);

// 원하는 인덱스가 존재하지 않아도 요소 추가 가능
arr[3] = "딸기"; // 단순하게 배열끝에 요소하나 붙임
console.log("arr[3] : ", arr[3]);

// 인덱스를 중간에 건너뛰게 되면 중간 부분이 empty(비어있음)
/*arr[5] = "멜론";
console.log("arr : ", arr);*/

arr[5] = "멜론";
console.log("arr : ", arr);


/* length : arr의 길이를 반환 */
console.log(arr.length);

/* length :  arr의 길이를 반환 */

/* for 문 이용 가능 */
/*
for(let i = 0; i < arr.length ; i++){
    console.log(`arr[${i}] : ${arr[i]}`)
}
*/

for(let i = 0 ; i < arr.length ; i++){
    console.log(`arr[${i}] : ${arr[i]}`);
}


/* 배열의 타입 확인 */
console.log(typeof arr); // object



