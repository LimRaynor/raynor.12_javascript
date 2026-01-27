let arr = ["1080px", "$100", "+200", "60kg", "6m", "-15"];

console.log(removeChar(arr));

function removeChar(arr){
    // 코드 작성
    return arr.map(item => {let number = parseInt(item);
        if (isNaN(number)) {number = parseInt(item.substring(1));}
        return number;
    });

}