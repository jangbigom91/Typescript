let studentIDs:number = 12345;
let studentNames:string = 'Jenny Kim';
let ages:number = 21;
let genders:string = 'male';
let subjects:string = 'Javascript';
let courseCompleteds:boolean = false;

let student1 = {
    studentIDs: 123412,
    studentNames: 'Jenny Oh',
    ages: 26,
    genders: 'female',
    subjects: 'Java',
    courseCompleteds: true
}

// 인터페이스 이름은 대문자로 시작
// 인터페이스 코드는 JS에서는 나타나지 않음
interface Student {
    readonly studentIDs: number;
    studentNames: string;
    ages?: number;
    genders: string;
    subjects: string;
    courseCompleteds: boolean;
    
    // 메소드
    //addComment (comment: string): string;
    addComment?: (comment:string) => string;
}

// Student 인터페이스 return 시에 ages값이 없어도 컴파일이 가능 
// 이유는 ages 뒤에 ? 를 붙이면서 선택적프로퍼티를 했기 때문
// ?없이 return 시에 ages값이 없으면 에러발생
function getStudentDetails(studentIDs: number): Student 
{
    return {
        studentIDs: 123456,
        studentNames: 'Mark Jacobs',
        genders: 'male',
        subjects: 'Node JS',
        courseCompleteds: true
    };
}

function saveStudentDetails (student: Student): void {
    //student.studentIDs=11222; studentIDs를 수정할수 없다.
    //왜냐면 인터페이스 Student에 studentIDs 앞에 readonly(읽기전용 프로퍼티)를 넣었기 떄문에
}

saveStudentDetails({
    studentIDs: 121212,
    studentNames: 'John Jake',
    ages: 30,
    genders: 'female',
    subjects: 'Mongo DB',
    courseCompleteds: false
})

saveStudentDetails(student1)