// length property는 배열 요소의 개수를 나타내는 0이상의 정수를 가짐

console.log("1. 빈 배열의 length : ", [].length); //0

const arr = [1, 2, 3, 4, 5];
console.log("2. [1, 2, 3, 4, 5]의 length: " , arr.length);
// length property 값은 배열 요소가 추가/제거 될 때 마다 자동으로 갱신됨
arr.push(6); // 배열 마지막 요소 추가
console.log("3. push(6) 후 배열 : ", arr);
console.log('length:', arr.length);

arr.pop(); // 배열 마지막 요소 제거
console.log('4. pop() 후 배열:', arr);
console.log('length:', arr.length);

// length property에 임의의 값을 명시적으로 할당할 수 있다.
// -> 배열 길이를 초과한 요소들이 제거됨
// -> 배열 길이가 요소보다 많아 지면 empty(빈 슬롯)으로 채움
arr.length = 3;
console.log("5. length를 3으로 변경: ", arr); // [1, 2, 3]

arr.length = 10;
console.log("6. length를 10으로 변경: ", arr); // [1, 2, 3, <7 empty items>]

// JS는 배열의 요소가 연속적으로 위치하지 않고
// 중간중간 일부가 비어있는 "희소 배열"을 허용한다
const sparse = [, 2, , 4];
console.log("7. 희소 배열: " , sparse); // <1 empty item>, 2, <1 empty item>, 4
console.log("8. 희소 배열의 내부 구조 : ",
    Object.getOwnPropertyDescriptors(sparse)); // 비어잇는것도 길이에 포함이 된다.

/* for in vs for of */

/* for in >> 객체 내 "모든 key 값 만큼순회" (length 제외) */

/*console.log("9. for in");
for(let key in arr){
    console.log(arr[key]);
}*/

console.log("9. for in");
for(let key in arr){
    console.log(key, arr[key]);
}

/* for of >> length 만큼 값(value) 순회 */
console.log("10. for of");
for(let item of arr){
    console.log(arr[item]);
}

