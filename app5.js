/*
let studentIDss:number = 12345;
let studentNamess:string = 'Jenny Kim';
let agess:number = 21;
let genderss:string = 'male';
let subjectss:string = 'Javascript';
let courseCompletedss:boolean = false;

let students1 = {
    studentIDss: 123412,
    studentNamess: 'Jenny Oh',
    agess: 26,
    genderss: 'female',
    subjectss: 'Java',
    courseCompletedss: true
}

// 인터페이스 이름은 대문자로 시작
// 인터페이스 코드는 JS에서는 나타나지 않음
interface Students {
    readonly studentIDss: number;
    studentNamess: string;
    agess?: number;
    genderss: string;
    subjectss: string;
    courseCompletedss: boolean;
    
    // 메소드
    //addComment (comment: string): string;
    addComment?: (comment:string) => string;
}

// Student 인터페이스 return 시에 ages값이 없어도 컴파일이 가능
// 이유는 ages 뒤에 ? 를 붙이면서 선택적프로퍼티를 했기 때문
// ?없이 return 시에 ages값이 없으면 에러발생
function getStudentDetails(studentIDss: number): Students
{
    return {
        studentIDss: 1234567,
        studentNamess: 'Mark Jacobs',
        genderss: 'male',
        subjectss: 'Node JS',
        courseCompletedss: true
    };
}

function saveStudentDetails (student: Students): void {
    //student.studentIDs=11222; studentIDs를 수정할수 없다.
    //왜냐면 인터페이스 Student에 studentIDs 앞에 readonly(읽기전용 프로퍼티)를 넣었기 떄문에
}

saveStudentDetails({
    studentIDss: 121212,
    studentNamess: 'John Jake',
    agess: 30,
    genderss: 'female',
    subjectss: 'Mongo DB',
    courseCompletedss: false
})

saveStudentDetails(students1)
*/
var studentID1 = 12345;
var studentName1 = 'Jenny Kim';
var age1 = 21;
var gender1 = 'male';
var subject1 = 'Javascript';
var courseCompleted1 = false;
// 열거형 Enum - 연관된 아이템들을 함께 묶어서 표현 할 수 있는 수단
// GenderType에서 male은 0, female은 1, genderNeutral은 2... 이런것은
// 숫자 열거형 Numeric Enum
/*
enum GenderType {
    male,
    female,
    genderNeutral
}
*/
// 문자 열거형 String Enum 은 Enum속의 멤버들에게 각각의 값을 할당해주면 된다.
/*
enum GenderType {
    male = 'male',
    female = 'female',
    genderNeutral = 'genderNeutral'
}
*/
var students2 = {
    studentID1: 123412,
    studentName1: 'Jenny Oh',
    age1: 26,
    gender1: 'female',
    subject1: 'Java',
    courseCompleted1: true
};
// Student 인터페이스 return 시에 ages값이 없어도 컴파일이 가능 
// 이유는 ages 뒤에 ? 를 붙이면서 선택적프로퍼티를 했기 때문
// ?없이 return 시에 ages값이 없으면 에러발생
function getStudentDetails(studentID1) {
    return {
        studentID1: 1234567,
        studentName1: 'Mark Jacobs',
        gender1: 'male',
        subject1: 'Node JS',
        courseCompleted1: true
    };
}
function saveStudentDetails(student) {
    //student.studentIDs=11222; studentIDs를 수정할수 없다.
    //왜냐면 인터페이스 Student에 studentIDs 앞에 readonly(읽기전용 프로퍼티)를 넣었기 떄문에
}
saveStudentDetails({
    studentID1: 121212,
    studentName1: 'John Jake',
    age1: 30,
    gender1: 'female',
    subject1: 'Mongo DB',
    courseCompleted1: false
});
saveStudentDetails(students2);
