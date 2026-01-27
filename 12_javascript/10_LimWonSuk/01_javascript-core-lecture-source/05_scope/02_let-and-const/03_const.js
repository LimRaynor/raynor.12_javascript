    // const(constant, 상수(고정값))
    // - let  키워드와 동일한 특징을 가짐
    // 단, 한 번 값을 대입하면 변경할 수 없음

    const x = 1;
//    x = 2; // x값에 대한 제할당 금지

    const student = {
        name : "홍킬동"
    }
   // student = {} // student값에 대한 제할당 금지

    // 객체의 프로퍼티 값을 변경하는 것을 가능하다.
    student.name = "홍킬순";
    console.log(student);

