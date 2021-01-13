// 함수의 타입 명시
// 함수의 반환(Return)타입, 함수의 매개변수(Parameter)
// 함수의 반환 타입
// void타입 - 아무것도 반환하지 않는 함수의 반환 값으로만 사용될 수 있는 타입
function sendGreeting(message, userName) {
    console.log(message + ", " + userName);
}
sendGreeting('Hello', 'Mark');
// 함수의 매개변수에 타입을 지정해줄 때 매개변수 뒤에 :~ 타입을 지정해주면 된다.
function sendGreeting1(message1, userName1) {
    console.log(message1 + ", " + userName1);
}
sendGreeting1('Hello', 'Mark');
// 타입스크립트에서 함수에 정의된 모든 매개변수가 함수에 필요하다고 가정
// 매개변수와 호출하는 값이 일치하지 않으면 에러가 발생한다. ex) 매개변수가 2개면 호출하는 값도 2개여야 한다.
// 이런것을 해결해주는 것이 선택적 매개변수(Optional Parameter)
// 매개변수 뒤에 ?를 붙이면 선택적 매개변수가 된다.
function sendGreeting2(message2, userName2) {
    console.log(message2 + ", " + userName2);
}
sendGreeting2('Hello'); // 매개변수는 2개지만, 값이 하나가 호출되어도 에러발생x, 선택적 매개변수를 사용했기 때문
// 기본 매개변수(Default Parameter)
// 매개변수 뒤에 값을 지정해주면 됨
function sendGreeting3(message3, userName3) {
    if (message3 === void 0) { message3 = 'Hello'; }
    if (userName3 === void 0) { userName3 = 'there'; }
    console.log(message3 + ", " + userName3);
}
sendGreeting3(); // 실행 시, Hello, there 값 출력(기본 매개변수)
sendGreeting3('Good morning'); // Good morning, there 값 출력
sendGreeting3('Good afternoon', 'Jenny'); // Good afternoon, Jenny 값 출력
// 화살표 함수 =>
var sendGreeting4 = function (message4, userName4) {
    if (message4 === void 0) { message4 = 'Hello'; }
    if (userName4 === void 0) { userName4 = 'there'; }
    return console.log(message4 + ", " + userName4);
};
sendGreeting4(); // 실행 시, Hello, there 값 출력(기본 매개변수)
sendGreeting4('Good morning'); // Good morning, there 값 출력
sendGreeting4('Good afternoon', 'Jenny'); // Good afternoon, Jenny 값 출력
