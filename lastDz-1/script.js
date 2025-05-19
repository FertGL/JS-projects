class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
        this.positions = [];
    }

    addEmployee(fullName, gender, position, salary) {
        this.employees.push({ fullName, gender, position, salary });
        if (!this.positions.includes(position)) {
            this.positions.push(position);
        }
    }

    removeEmployee(index) {
        if (index >= 0 && index < this.employees.length) {
            this.employees.splice(index, 1);
        } else {
            console.log("Некорректный индекс");
        }
    }

    updateEmployee(index, newFullName, newGender, newPosition, newSalary) {
        if (index >= 0 && index < this.employees.length) {
            this.employees[index] = { fullName: newFullName, gender: newGender, position: newPosition, salary: newSalary };
            if (!this.positions.includes(newPosition)) {
                this.positions.push(newPosition);
            }
        } else {
            console.log("Некорректный индекс");
        }
    }

    listEmployees() {
        console.log(`Сотрудники компании ${this.name}:`);
        this.employees.forEach((employee, index) => {
            console.log(`${index}: ${employee.fullName}, ${employee.gender}, ${employee.position}, ЗП: ${employee.salary}`);
        });
    }

    listPositions() {
        console.log(`Должности в компании ${this.name}:`);
        console.log(this.positions.join(", "));
    }

    getSalaryByIndex(index) {
        if (index >= 0 && index < this.employees.length) {
            return this.employees[index].salary;
        } else {
            console.log("Некорректный индекс");
            return null;
        }
    }
}

const myCompany = new Company("Tech Solutions");

myCompany.addEmployee("Ферт Глеб", "Мужской", "Разработчик", 100000);
myCompany.addEmployee("София", "Женский", "Дизайнер", 55000);
myCompany.addEmployee("Андрей", "Мужской", "Менеджер", 70000);

myCompany.listEmployees();
myCompany.listPositions();

myCompany.updateEmployee(1, "София", "Женский", "Старший дизайнер", 65000);
myCompany.listEmployees();

myCompany.removeEmployee(0);
myCompany.listEmployees();

console.log(`Зарплата сотрудника под индексом 1: ${myCompany.getSalaryByIndex(1)}`);