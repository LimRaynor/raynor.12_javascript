/* 다양한 사용법 */

// 1. 객체 프로퍼티에서 사용하기
const user = {};
[user.firstName, user.lastName] = "진호/정".split(" ");
console.log(user);

// 2. 변수 값 교환
let student = '선생님';
let teacher = '학생';

// 방법 1) 임시 변수를 이용한 swap
let tmp = student;
student = teacher;
teacher = tmp;
console.log("student : ", student);
console.log("teacher : ", teacher);

// 방법 2) 구조 분해 할당 이용
const arr = [student, teacher];
[teacher, student] = arr;
[teacher, student] = [student, teacher]; // [0, 1] = [0, 1] -> 서로 같은번호끼리 묶음

// 방법 3) rest parameter와 함께 사용하기
const [sign1, sign2, ...rest]
    = ['양자리', '염소자리', '사자자리', '처녀자리', '게자리', '물병자리'];

console.log(sign1);
console.log(sign2);
console.log(rest);

/* 중요 !! */
// 방법 4) 기본 값 설정하고 사용하기 (아무것도 대입 안되었을때 기본값 반환)
const [firstName, lastName =  "김"] = ["병진"]; // lastName =  defined 였는데 다른걸로 기본값을 바꿔줌
console.log(firstName);
console.log(lastName);