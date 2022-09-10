// ***************** INPUTS **********************

// PLEASE INPUT YOUR NAME:
const firstName = 'John';

// PLEASE INPUT YOUR SURNAME:
const surname = 'Doe1';

// PLEASE ENTER YOUR ANNUAL SALARY:
const annualSalary = 60050;

// PLEASE ENTER YOUR SUPER RATE:
const superRate = 9;

// PLEASE ENTER YOUR PAYMENT START DATE:
const startDate = new Date('1 March 2018');

// PLEASE ENTER YOUR PAYMENT END DATE:
const endDate = new Date('31 March 2018');

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

const taxThreshold = bracket1.lowerIncome;

const incomeBrackets = [bracket1, bracket2, bracket3, bracket4];

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

// ************ CALCULATIONS **************
const fullName = firstName + ' ' + surname;

const payPeriod = startDate.toLocaleDateString() + ' - ' + endDate.toLocaleDateString();

const startMonth = startDate.getMonth();
const endMonth = endDate.getMonth();
let payMonths = 1;
if (endMonth > startMonth) {
    payMonths = endMonth - startMonth + 1;
} else if (endMonth < startMonth) {
        payMonths = endMonth - startMonth + 13;
}
const payMonthsPerYr = payMonths / 12;

const grossIncome = Math.round(annualSalary * payMonthsPerYr);

let incomeTax = 0;
if (annualSalary > taxThreshold) {
    for (let i = incomeBrackets.length - 1; i >= 0; i--) {
        if (annualSalary === incomeBrackets[i].lowerIncome) {
            incomeTax = Math.round(incomeBrackets[i].baseTax * payMonthsPerYr);
            i = 0;
        } else if (annualSalary > incomeBrackets[i].lowerIncome) {
            const annualTaxForBracket = (annualSalary - incomeBrackets[i].lowerIncome) * incomeBrackets[i].taxRate;
            incomeTax = Math.round((incomeBrackets[i].baseTax + annualTaxForBracket) * payMonthsPerYr);
            i = 0;
        }
    }
}

const netIncome = grossIncome - incomeTax;

const superannuation = Math.round(grossIncome * superRate / 100);

// ! ************* CALCULATIONS PRO RATA BY DAY *****

// const oneDayInMS = 1000 * 60 * 60 * 24;
// const payDaysPerYr = ((endDate.getTime() - startDate.getTime()) / oneDayInMS + 1) / 365;
// const grossIncome = Math.round(annualSalary * payDaysPerYr);

// let incomeTax = 0;
// if (annualSalary > taxThreshold) {
//     for (let i = incomeBrackets.length - 1; i >= 0; i--) {
//         if (annualSalary === incomeBrackets[i].lowerIncome) {
//             incomeTax = Math.round(incomeBrackets[i].baseTax * payDaysPerYr);
//             i = 0;
//         } else if (annualSalary > incomeBrackets[i].lowerIncome) {
//             const annualTaxForBracket = (annualSalary - incomeBrackets[i].lowerIncome) * incomeBrackets[i].taxRate;
//             incomeTax = Math.round((incomeBrackets[i].baseTax + annualTaxForBracket) * payDaysPerYr);
//             i = 0;
//         }
//     }
// }

// ************** RUNTIME *****************
console.log('Welcome to the payslip generator!');
console.log('');
console.log('Processing inputted data.')
console.log('*********************************');
console.log('BEEP BOOP BOOP BZZZZZ BEEEEEEEP ......');
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

console.log('TA-DAAaaaAAaaAA!!!');
console.log('');
console.log('Your payslip has been generated:');
console.log('');
console.log('Name: ' + fullName);
console.log('Pay Period: ' + payPeriod);
// console.log('Days worked: ' + payDaysPerYr);
console.log('Gross Income: ' + grossIncome);
console.log('Income tax: ' + incomeTax);
console.log('Net Income: ' + netIncome);
console.log('Superannuation: ' + superannuation);
console.log('');
console.log('Thank you for using MYOB!');