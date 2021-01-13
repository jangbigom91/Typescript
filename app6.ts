// Any타입 - 어떤 타입이든 ok, 하지만 변수를 지정하기 애매할 때 사용하는게 좋다.
// 밑에 예시와 같이 any타입을 number로 지정해도 someValue의 값을 string, boolean으로
// 값을 지정해줘도 any타입은 아무 문제가 없다.
let someValue: any = 5;
someValue = 'hello';
someValue = true;

// 변수의 제한된 타입들을 동시에 지정하고 싶을때는
// 유니언타입 사용
// 유니언타입 표기는 지정하고 싶은 변수 사이에 | 표기
// 밑에 예시 price는 number, string 값을 가질수 있다
let price: number | string = 5;
price = 'free';  // string값이 와도 문제가 없다.
// price = true; 하지만 boolean값이 오면 에러발생, price의 타입을 number,string으로만 지정했기 때문

// Type Aliases - 같은 코드를 반복하는 것 보다는 코드를 타입으로 지정해서 재활용
// Type Aliases는 type 키워드를 넣고 이름을 지정
type StrOrNum = number | string; // Type Aliases 지정
let totalCost: number;
let orderID: StrOrNum;

const calculateTotalCost = (prices: number | string, qty: number)
:void => {

};

const findOrderID = (customer: {customerId: number | string,
name: string}, productId: number | string): number | string => {
        return orderID;
}

// 유니언 타입을 사용할 때 Typeof Operator를 사용하여 코드 검증을 수행하는 것을
// 타입가드(Type Guard)라고 한다.
type StringOrNum = string | number;
let itemPrice: number;

// Typeof Operator는 변수의 데이터 타입을 반환하는 연산자
// 조건문과 같이 사용
const setItemPrice = (price1: StringOrNum):void => {
    if (typeof price1 === 'string') {
        itemPrice = 0;
    }else {
        itemPrice = price1;
    }
}

setItemPrice(50);