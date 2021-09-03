// @ts-check

/**
 * Registered student name
 * @constant {string}
 */
const STUDENT_NAME = 'Jhon Fool';

/**
 * Array of grades
 * @constant {Array<number>}
 */
const GRADES = [98, 70, 80];

/**
 * Example create TODO object
 * @constant {object}
 * @property {number} id - an ID.
 * @property {string} text - some text if you want.
 */
const TODO = {
    id: 1,
    text: 'Hello World !',
};

/**
 * Calculate the tax 
 * @param {number} amount - total amount
 * @param {number} tax - tax percentage
 * @returns {string} - total with a dollar sign
 */
const calculateTax = (amount, tax) => `$ ${amount + tax * amount}`