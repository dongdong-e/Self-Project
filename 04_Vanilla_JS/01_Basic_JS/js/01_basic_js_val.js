// let: 초기 변수 설정, 차후 변경 가능 (Changable)
// console.log = print funtion of Python
let a = 221;
let b = a - 5;
a = 4;
console.log(b);

/* const 초기에 설정한 변수이지만 차후 변경 불가 (Unchangable)
<<<첫사용은 const를 사용하는게 좋음!!!!!!>>>
*/
const a = 221;
let b = a - 5;
a = 4 // 위에서 const로 변수 선언을 했기 때문에 변경 불가하다는 오류 발생
console.log(b, a);

// String type
const name = "KYD";

// Boolean type
const result = true;
const result = false;

// float type
const float_number = 66.6;

// Array
const daysOfWeek = ["Mon", "Tue", "Wed", "Thur", "Fri"];
console.log(daysOfWeek); // console.log(daysOfWeek[2]); -> Wed

// Object
const kydInfo = {
    name: "KYD",
    age: 32,
    gender: "Male",
    location: "Incheon",
    favMovies: ["Avengers", "IronMan", "Frozen"],
    favFood: [
        {
        name: "Chicken",
        fatty: false
        },
        {
        name: "CheeseBuger",
        fatty: true
        }
    ]
};
console.log(kydInfo);
console.log(kydInfo.gender);

kydInfo.gender = "Female" // gender 속성 변경