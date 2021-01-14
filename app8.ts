class Employee {
    fullName:string;
    newAge:number;
    jobTitle:string;
    hourlyRate:number;
    workingHoursPerWeek:number;
     
    printEmployeeDetails = ():void => {
        console.log(`${this.fullName}의 직업은 ${this.jobTitle}이고 
        일주일의 수입은 ${this.hourlyRate*this.workingHoursPerWeek} 달러 이다.`)
    }
}

let employee1 = new Employee();
employee1.fullName = '정한';
employee1.newAge = 31;
employee1.jobTitle = '주니어 웹개발자';
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 35;

let employee2 = new Employee();
employee2.fullName = '미송';
employee2.newAge = 28;
employee2.jobTitle = '프로덕트 매니저';
employee2.hourlyRate = 38;
employee2.workingHoursPerWeek = 45;

employee1.printEmployeeDetails();
employee2.printEmployeeDetails();