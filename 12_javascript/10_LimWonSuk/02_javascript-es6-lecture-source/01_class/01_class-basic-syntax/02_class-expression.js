/* 02 _class-expression */

/* 클래스 표현식 */
// 1. 익명 클래스 표현식
let Tutor = class {
    teach(){
        console.log(" daz? ");
    }
}
new Tutor().teach();

// 2. 기명 클래스 표현식 (클래스 위치에따라서 다르게 부름)
let Tutee = class MyTutee{ // 클래스 밖 = Tutee, 클래스 안 = MyTutee
    learn(){
        console.log(this instanceof MyTutee)
        console.log( `daz!!` )
    }
}

new Tutee().learn();
//new MyTutee().learn(); // 오류 발생(MyTutee 이름으로 외부 접근 불가)



// 3. 클래스 동적 생성
// - 필요에 따라 클래스를 생성하여 반환하는 함수를 만들 수 있다.
function makeTutee(message){
    return class {
        feedback(){
            console.log(message);
        }
    };
}
let SecondTutee = makeTutee("이해가 쏙쏙 되자너");
new SecondTutee().feedback();

// => 클래스 표현식 정의가 가능하다는 것은
// 함수처럼 클래스도 "일급 객체"이며 (클래스는 함수니까 일급객체이다)
// 다른 표현식 내부에 정의, 전달, 반환, 할당이 가능하다는 것이다.