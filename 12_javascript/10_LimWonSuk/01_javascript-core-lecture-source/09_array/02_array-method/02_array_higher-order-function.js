/* 배열 고차 함수*/
// 고차함수 -> 콜백 함수를 매개변수로 전달 받는 함수
//          + 함수를 반환 하는 함수도 고차 함수

// Arrat.prototype.sort " 정렬
let  numbers = [];
for (let i = 0; i < 10; i++) {
    numbers[i] = Math.floor(Math.random() * 100 + 1); // 비어있는 배열이어도 JS에서는 가능
}

console.log("정렬 전 : ", numbers);

numbers.sort();
console.log("numbers.sort() 후 : ", numbers);

// sort() 기본 정렬은 "문자 오름 차순 정렬"
// 숫자 정렬이나 다른 정렬이 필요하면 콜백 함수를 sort()에 전달해야 한다.
numbers.sort((a,b) => a - b );
console.log("numbers.sort((a, b) => a - b) 후 : ", numbers); // 오름차순

numbers.sort((a,b) => b - a);
console.log("numbers.sort((a, b) => b - a) 후 : ", numbers); // 내림차순

// Array.prototype.forEach : for문을 대체하는 고차 함수
// 1~5 에서 하나씩 꺼네서 넣는거
// numbers = [1, 2, 3, 4, 5];
numbers = [1,2,3,4,5];


numbers.forEach(item => console.log(item));

console.log("forEach(item, index, array)")
numbers.forEach((item, index, array) => {
    console.log(`[${index}] : ${item}, ${array}`);
});

/* 중요 */
// Array.prototype.map()
// - 배열 요소 전체를 대상으로 콜백 함수 호출 후
// 반환되는 값들로만 이뤄진 새 배열을 반환하는 고차함수
const original1 = [true, 1, 'text'];

const types = original1.map(item => typeof item);
console.log("types : ", types);

const original2 = ['apple', 'banana', 'cat', 'dog', 'egg'];

// 각 요소의 글자 수만 반환된 배열 생성
const lengths = original2.map(item => item.length);
console.log("lengths : ", lengths);

/* 중요 */
// Array.prototype.filter()
// - 배열 요소 전체를 대상으로 콜백 함수 호출 후
//  반환되는 값이 true인 요소로만 이루어진 새 배열을 반환하는 고차함수
numbers = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10];

// 홀수 요소만으로 이루어진 새 배열 생성
const odds = numbers.filter(item => item % 2);
console.log("odds : ", odds);

// 짝수 요소만으로 이루어진 새 배열 생성
// const odds = numbers.filter(item => !(item % 2)); // ()해서 순서맞춤
const evens = numbers.filter(item => item % 2 === 0); // 맞음

console.log("evens : ", evens);

// Arrat.prototype.reduce
// - 배열을 순회하면 각 요소에 대하여
//  이전의 콜백함수 실행 반환값을 전달하여
// 콜백 함수를 실행하고 그 결과르 반환

numbers.reduce((previousValue, currentValue, currentIndex, array) =>{
    console.log(`[${currentIndex}] 이전값: ${previousValue}, 현재값: ${currentValue}`);
    return  currentValue;
});

// reduce를 이용한 합산 구하기
const sum = numbers.reduce((prev, curr) => prev + curr);
console.log("sum : ", sum);

// reduce를 이용한 최대값 구하기
const max = numbers.reduce((prev, curr) => prev > curr ? prev : curr); // 삼항 연산자 사용
console.log("max : ", max);

// reduce를 이용한 최소값 구하기
const min = numbers.reduce((prev, curr) => prev < curr ? prev : curr); // 삼항 연산자 사용
console.log("min : ", min);

// Array.prototype.some()
// - 배열 내 "일부" 요소가 콜백 함수 테스트를 통과하는질 확인하여
// true 또는 false 반환
const testArr = [1, 2, 3, 4, 5, 6, 7];

// 배열 내 요소 중 10 보다 큰 요소가 하나라도 있는가?
let result = testArr.some(item => item > 10);
console.log("result : ", result);

// 배열 내 요소 중 3 보다 큰 요소가 하나라도 있는가?
result = testArr.some(item => item > 3);
console.log("result : ", result);


// Array.prototype.every()
// - 배열 내 모든 요소가 콜백 함수 테스트를 통과하는지 확인하여
//  true 또는 false 반환
result = testArr.every(item => item > 2);
console.log("result : ", result);

result = testArr.every(item => item > 0);
console.log("result : ", result);


// Array.prototype.find find : // 있는지 여부
// 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여
// 그 결과가 참인 첫번째요소를 반환, 참인 요소가 존재하지 않는다면 undefined를 반환

// Array.prototype.findIndex findIndex : // 어디에 있는지 여부
// 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여
// 그 결과가 참인첫번째 요소의 인덱스를 반환참인 요소가 존재하지 않는다면 -1을 반환
// 그 결과가 참인 첫 번째 요소의 인덱스를 반환한다. 참인 요소가 존재하지 않는다면 -1 을 반환한다.

const students = [
    { name : '유관순', score : 90 },
    { name : '홍킬동', score : 80 },
    { name : '장보고', score : 70 }
];
// find
console.log("이름이 홍킬동인 학생 찾기 : ",
    students.find(item => item.name === "홍킬동"));
console.log("이름이 이순신인 학생 찾기 : ",
    students.find(item => item.name === "이순신"));

// findIndex
console.log("이름이 홍킬동인 학생 찾기 : ",
    students.findIndex(item => item.name === "홍킬동"));
console.log("이름이 이순신인 학생 찾기 : ",
    students.findIndex(item => item.name === "이순신"));

// 점수 가 80점 이상인 학생 모두 찾기(1개 === find, n개 == filter)
result = students.filter(item => item.score >= 80);
console.log("80점 이상 학생 : ", result);

// 점수 가 80점 이상인 학생 이름 모두 찾기(1개 === find, n개 == filter)

// result2 = result.map((student)=>student.name);

result2 = students.filter(student => student.score >= 80).map(student => student.name);


console.log("80점 이상 학생 이름 : ", result2);