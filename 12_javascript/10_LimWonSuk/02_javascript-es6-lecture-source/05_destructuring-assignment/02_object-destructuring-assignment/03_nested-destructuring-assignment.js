// 중첩 구조 분해 할당 == 모든 값을 분해해서 개별로 만들고 싶음
const product = {
    size: { // 객체
        width: 10,
        height: 30
    },
    items: ['doll', 'robot'] // 배열
};
const {
    size: {width, height},
items: [item1, item2]
} = product;

//
console.log(width); // 10
console.log(height); // 30
console.log(item1); // doll
console.log(item2); // robot
