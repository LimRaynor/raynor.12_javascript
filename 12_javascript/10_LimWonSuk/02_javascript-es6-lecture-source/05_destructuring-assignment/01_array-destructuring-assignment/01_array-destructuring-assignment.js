/* 01_array-destructuring-assignment */

// 배열 구조 분해 할당
const nameArr = ["킬동", "홍"]

//
//const firstName = nameArr[0];
//const lastName  = nameArr[1];

//nameArr의 [0] 값을 Firstname 할당
//nameArr의 [1] 값을 Lasrname 할당
const [firstName, lastName] = nameArr;
console.log("firstName : ", firstName);
console.log("lastName : ", lastName);

// 반환 값이 배열인 split 메서드를 활용
const [firstName2, lastName2] = "순신 이".split(' ');
console.log("firstName : ", firstName2);
console.log("lastName : ", lastName2);

// 쉼표를 사용하여 필요하지 않은 배열 요소를 버릴 수 있음.
const arr = ['first', 'second', 'third'];

const [var1, , var2] = arr;
console.log(var1, var2); // 빈칸은(second) 버려짐