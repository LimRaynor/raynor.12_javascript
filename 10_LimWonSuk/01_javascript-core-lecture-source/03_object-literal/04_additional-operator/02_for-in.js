// 일반 for문 (java와 유사함)
for ( i = 0; i < 5; i++) {
    console.log(i)
}

/* for in 반복문 : 객체의 모든 키를 순회하는 반복문 */
var student = {
    name : "유관순",
    age : 16,
    getInfo(){
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
}
for(var key in student){
    // student 객체 내 프로퍼티 키 값을 순차적으로 꺼네와
    // key 변수에 저장
    console.log(`key : ${key}`); //  키를 하나씩 꺼네봄

/*
    console.log(`student.key : ${student.key}`); // undefined student안에 참조할게 없다
*/
// 왜 undefined?? student 객체의 key라는 이름의 프로퍼티가 없어서

    // for in 구문은 []를 이용해서 프로퍼티 값에 접근할 수 있다
    console.log(`student[key] : ${student[key]}`);
}