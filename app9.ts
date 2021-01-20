/*
class Employees {
    private _fullName:string; // _ 있는 경우는 Private멤버라는 암묵적인 명시방법
    newAge:number;
    jobTitle:string;
    hourlyRate:number;
    workingHoursPerWeek:number;

    // Constructor(생성자)는 클래스로부터 객체를 생성할 때 호출, 객체의 초기화를 담당
    constructor(fullName:string, newAge:number, jobTitle:string,
        hourlyRate:number, workingHoursPerWeek:number) {
            this._fullName = fullName;
            this.newAge = newAge;
            this.jobTitle = jobTitle;
            this.hourlyRate = hourlyRate;
            this.workingHoursPerWeek = workingHoursPerWeek;
        }
        
        get fullName () {
            return this._fullName;
        }

        set fullName (value: string) {
            this._fullName = value;
        }
    
    printEmployeeDetails = ():void => {
        console.log(`${this._fullName}의 직업은 ${this.jobTitle}이고 
        일주일의 수입은 ${this.hourlyRate*this.workingHoursPerWeek} 달러 이다.`)
    }
}
*/

// 클래스를 통해서 객체를 생성할 때, 생성자에 정의된 Parameter(매개변수들)의 값이
// Arguments로 전달되어야 한다.
// let employee11 = new Employees('정한', 31, '주니어 웹개발자', 40, 35);

// Access Modifiers(접근제한자)는 클래스 속 멤버 변수(프로퍼티)와 메소드에 적용될 수 있는 키워드
// 클래스 외부로부터의 접근을 통제
// Access Modifiers에는 Public, Private, Protected
// Public - 클래스 외부에서 접근가능, Private - 클래스 내에서만 접근가능, Protected - 클래스 내부, 그리고 상속받은 자식 클래스에서 접근가능

// employee11.fullName = '헨리'; 에러 발생, fullName이 Private이므로 클래스 외부에서 사용할 수 없다.

// getter와 setter 설정하면 에러 발생x
// employee11.fullName = '헨리';


// Constructor의 매개변수에 Access Modifiers 직접 적용 - 코드가 간결해짐
// 객체가 생성될 때, 생성자의 매개변수로 전달된 값은, 객체의 프로퍼티 값으로 자동으로
 // 그 값이 초기화 되고 할당된다.
class Employees {

    // Constructor(생성자)는 클래스로부터 객체를 생성할 때 호출, 객체의 초기화를 담당
    constructor(
        private _fullName:string,
        private _newAge:number, 
        private _jobTitle:string,
        private _hourlyRate:number, 
        public workingHoursPerWeek:number) {
    }
        
        get fullName () {
            return this._fullName;
        }

        set fullName (value: string) {
            this._fullName = value;
        }
    
    printEmployeeDetails = ():void => {
        console.log(`${this._fullName}의 직업은 ${this._jobTitle}이고 
        일주일의 수입은 ${this._hourlyRate*this.workingHoursPerWeek} 달러 이다.`)
    }
}
