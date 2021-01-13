// Any타입 - 어떤 타입이든 ok, 하지만 변수를 지정하기 애매할 때 사용하는게 좋다.
// 밑에 예시와 같이 any타입을 number로 지정해도 someValue의 값을 string, boolean으로
// 값을 지정해줘도 any타입은 아무 문제가 없다.
var someValue = 5;
someValue = 'hello';
someValue = true;
// 변수의 제한된 타입들을 동시에 지정하고 싶을때는
// 유니언타입 사용
// 유니언타입 표기는 지정하고 싶은 변수 사이에 | 표기
// 밑에 예시 price는 number, string 값을 가질수 있다
var price = 5;
price = 'free'; // string값이 와도 문제가 없다.
var totalCost;
var orderID;
var calculateTotalCost = function (prices, qty) {
};
var findOrderID = function (customer, productId) {
    return orderID;
};
var itemPrice;
// Typeof Operator는 변수의 데이터 타입을 반환하는 연산자
// 조건문과 같이 사용
var setItemPrice = function (price1) {
    if (typeof price1 === 'string') {
        itemPrice = 0;
    }
    else {
        itemPrice = price1;
    }
};
setItemPrice(50);
