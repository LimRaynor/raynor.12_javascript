/* 02_method-overriding */
// 메서드 오버라이딩
// - 부모 클래스로 부터 상속받은 메서드를 자식이 재정의해서 사용하는 것

class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    move(lostWeight) {
        if(this.weight > lostWeight) {
            this.weight -= lostWeight;
            console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량되어 ${this.weight}kg이 되었습니다.`);
        }
    }
}

const animal = new Animal("호랑이", 221);
animal.move(3);

class Tiger extends Animal{
    /* 자식만의 메서드 */
    attack(target){
        console.log(`${this.name}(은)는 ${target}을 공격합니다.`);
    }

/*  부모로 부터 상속 받은 move() 오버라이딩
* -> 별도 어노테이션 없이 메서드명, 매개변수만 동일하게 작성
* */
    move(target){
        this.attack(target);
        super.move(0.2); // Animal의 move()

        // super 참조 변수
        // - 부모 클래스의 프로퍼티에 접근할 때 사용하는 참조 변수
    }
}
const Tiger2 = new Tiger("백두산 호랑이", 4000)
Tiger2.move("우주선");