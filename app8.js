var Employee = /** @class */ (function () {
    function Employee() {
        var _this = this;
        this.printEmployeeDetails = function () {
            console.log(_this.fullName + "\uC758 \uC9C1\uC5C5\uC740 " + _this.jobTitle + "\uC774\uACE0 \n        \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 " + _this.hourlyRate * _this.workingHoursPerWeek + " \uB2EC\uB7EC \uC774\uB2E4.");
        };
    }
    return Employee;
}());
var employee1 = new Employee();
employee1.fullName = '정한';
employee1.newAge = 31;
employee1.jobTitle = '주니어 웹개발자';
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 35;
var employee2 = new Employee();
employee2.fullName = '미송';
employee2.newAge = 28;
employee2.jobTitle = '프로덕트 매니저';
employee2.hourlyRate = 38;
employee2.workingHoursPerWeek = 45;
employee1.printEmployeeDetails();
employee2.printEmployeeDetails();
