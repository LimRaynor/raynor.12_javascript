
function Student(firstName, lastName, score){
    this.firstName = firstName;
    this.lastName = lastName;
    this.score = score;
}

const studentList = [
    new Student('킬동', '홍', 60),
    new Student('보고', '장', 70),
    new Student('관순', '유', 80)
];

sortFromScore(studentList);
console.log(studentList);
console.log(makeFullName(studentList));

function sortFromScore (arr) {
    // 코드 작성
    const students = [
        { name : '유관순', score : 60 },
        { name : '홍킬동', score : 70 },
        { name : '장보고', score : 80 }
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


}

function makeFullName(arr){
    // 코드 작성
    // 점수 가 80점 이상인 학생 모두 찾기(1개 === find, n개 == filter)
    result = students.filter(item => item.score >= 80);
    console.log("80점 이상 학생 : ", result);

// 점수 가 80점 이상인 학생 이름 모두 찾기(1개 === find, n개 == filter)

// result2 = result.map((student)=>student.name);

    result2 = students.filter(student => student.score >= 80).map(student => student.name);


    console.log("80점 이상 학생 이름 : ", result2);

}


