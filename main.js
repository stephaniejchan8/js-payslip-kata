// ***************** INPUTS **********************

// PLEASE INPUT YOUR NAME:
const firstName = 'John';

// PLEASE INPUT YOUR SURNAME:
const surname = 'Doe';

// PLEASE ENTER YOUR ANNUAL SALARY:
const annualSalary = 60050;

// PLEASE ENTER YOUR SUPER RATE:
const superRate = 9;

// PLEASE ENTER YOUR PAYMENT START DATE:
const startDate = new Date('21 March 2017');

// PLEASE ENTER YOUR PAYMENT END DATE:
const endDate = new Date('1 March 2017');

// ********************** INCOME BRACKETS ************
// function Bracket (lowerIncome, baseTax, taxRate) {
//     this.lowerIncome = lowerIncome;
//     this.baseTax = baseTax;
//     this.taxRate = taxRate;
// }

const startFinancialYear = new Date('1 July 2017');
const endFinancialYear = new Date('30 June 2018');

const bracket1 = {
    lowerIncome: 18200,
    baseTax: 0,
    taxRate: 0.19
};

const bracket2 = {
    lowerIncome: 37000,
    baseTax: 3572,
    taxRate: 0.325
};

const bracket3 = {
    lowerIncome: 87000,
    baseTax: 19822,
    taxRate: 0.37
};

const bracket4 = {
    lowerIncome: 180000,
    baseTax: 54232,
    taxRate: 0.45
};

// ************** VALIDATE DATA *******************
let validInput = true;
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


const invalidateData = () => {
    validInput = false;
}

const validateNameLength = (inputName) => {
    if (!inputName.trim().length) {
        console.log('Name must have at least 1 character.');
        invalidateData();
    }
};

const validateNameChars = (inputName) => {
    if (/[0-9]/.test(inputName) || specialChars.test(inputName)) {
        console.log('Name can only contain letters.');
        invalidateData();
    }
};

const validateSalary = (salary) => {
    if (!Number.isInteger(salary) || salary < 0) {
        console.log('Salary must be a positive integer.');
        invalidateData();
    }
};

const validateSuper = (superRate) => {
    if (!Number.isFinite(superRate) || superRate < 0 || superRate > 50) {
        console.log('Superannuation rate must be a number between 0 - 50 (inclusive).');
        invalidateData();
    }
};

const validateDate = (startDate, endDate) => {
    if (startDate < startFinancialYear || endDate > endFinancialYear) {
        console.log('Please ensure payment start and end date falls within ' + startFinancialYear.toLocaleDateString() + ' and ' + endFinancialYear.toLocaleDateString() + ' (inclusive).');
        invalidateData();
    }
    if (startDate > endDate) {
        console.log('Payment start date must be before payment end date.');
        invalidateData();
    }
};


// ************** RUNTIME *****************
console.log('Welcome to the payslip generator!');
validateNameLength(firstName);
validateNameChars(firstName);
validateNameLength(surname);
validateNameChars(surname);
validateSalary(annualSalary);
validateSuper(superRate);
validateDate(startDate, endDate);
if (validInput) {
    console.log('Thank you for inputting your data.');
} else {
    console.log('Please input data in the correct format and try again.');
    throw new Error ('Invalid input');
};
console.log('test');
