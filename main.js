// PLEASE INPUT YOUR NAME:
const firstName = 'John';

// PLEASE INPUT YOUR SURNAME:
const surname = 'Doe';

// PLEASE ENTER YOUR ANNUAL SALARY:
const annualSalary = 60050;

// PLEASE ENTER YOUR SUPER RATE:
const superRate = 9;

// PLEASE ENTER YOUR PAYMENT START DATE:
const startDate = new Date('1 March 2018');

// PLEASE ENTER YOUR PAYMENT END DATE:
const endDate = new Date('31 March 2018');

// function Bracket (lowerIncome, baseTax, taxRate) {
//     this.lowerIncome = lowerIncome;
//     this.baseTax = baseTax;
//     this.taxRate = taxRate;
// }

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

let validInput = true;
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

// const validateLength = (input) => {
//     if (input.trim().length || input )
// }

const invalidateData = () => {
    validInput = false;
}

const validateNameLength = (inputName) => {
    if (!inputName.trim().length) {
        console.log('Name must have at least 1 character');
        invalidateData();
    }
};

const validateNameChars = (inputName) => {
    if (/[0-9]/.test(inputName) || specialChars.test(inputName)) {
        console.log('Name can only contain letters.');
    }
};

