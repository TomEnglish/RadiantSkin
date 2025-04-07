// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// let x = 15;


// function solution(number){
//     //check if number is negative
//     if (number < 0) {
//         return 0;
//     } else {
//         let multiples = [];
//         for (let i = 0; i < number; i++) {
//             //check if number is multiple of 3 or 5
//             if (i % 3 === 0 || i % 5 === 0) {
//                 //if i mod 3 or 5 is no remainder then push number into multiples array
//                 multiples.push(i);
                
                
//             }

//         }
//         //remove duplicates from multiples array
//         multiples = [...new Set(multiples)];
//         //sum of all members of array
//         return multiples.reduce((a, b) => a + b, 0);
//     }
  
//   }

// console.log(solution(x));

// function solution(number){
//     //is number pos or negative
//     if (number < 0) { 
//       return 0; 
//     } else {
//       const multiples = [];
//       for (let i=1; i < number; i++){
//         if (number % 3 === 0 || number % 5 ===0) {
//         multiples.push(number);
//         } 
//       }
//       const uniq_multiples = [...Set(multiples)];
//       return uniq_multiples.reduce((a,b) => a+b,0)
//     }
// }

// let str="codewars";

// for (let i=0; i<str.length; i++){
//   console.log(str[i]);
// }

// // StringObject.slice(startindex,endindex)
// // StringObject.substring(startindex,endindex)
// // StringObject.substr(startindex,length)

// console.log(str.slice(0,4));

// function cutIt_z(arr){
//     let sl =arr[0].length;
//       for (let i =1; i<arr.length; i++){
//         if (arr[i].length < sl){
//         sl = arr[i].length 
//       }
//       }
//     return sl;
// }
  
// function cutIt(arr){
//     let sl = cutIt_z(arr);
//     let new_arr = [];
//     for (let i = 0; i<arr.length; i++){
       
//             new_arr.push(arr[i].slice(0,sl));
//         }
    
//     return new_arr;
// };
// console.log(cutIt(['Banana','ab',"toast",'gg','bb']));
        


function validatePWD(password) {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasValidLength = password.length >= 8 && password.length <= 20;

    valid = hasUppercase && hasLowercase && hasNumber && hasSpecialChar && hasValidLength;

    return valid;
}

// Test cases
console.log('PWD Tests')
console.log(validatePWD('bgt5%TGB')); //valid
console.log(validatePWD('BGT%%TGB')); //no lower
console.log(validatePWD('bgt5bgt5')); //noupper or special
console.log(validatePWD('nhy66YHN')); //nospecial
console.log(validatePWD('bgt5%TG'));  //too short



  // Character Counter for Text Inputs
  function countCharacters(inputText, maxLength) {
    const remaining = maxLength - inputText.length;
    return {
      current: inputText.length,
      remaining: remaining,
      isOverLimit: remaining < 0
    };
  }

  let inputText = "Hello, World!";
  let maxLength = 50;

  console.log('Character Counter Tests')
    console.log(countCharacters(inputText, maxLength)); // { current: 13, remaining: 37, isOverLimit: false }
    inputText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    console.log(countCharacters(inputText, maxLength)); // { current: 100, remaining: -90, isOverLimit: true }


  // Validate Email Format
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //Anything not space or '@' followed by '@' then anything not space or '@' followed by '.' and anything not space or '@'
    return regex.test(email);
  }

  console.log('Email Tests')
  console.log(isValidEmail('t.elliot.english@gmail.com'));
  console.log(isValidEmail('t.elliot.english@gmailcom'));
  console.log(isValidEmail('t.elliot.englishgmail.com'));
  console.log(isValidEmail("user.name@domain.co.uk"));
  console.log(isValidEmail("invalid email")); 
  console.log(isValidEmail("missing@domain")); 


  

  // Validate Phone Number Format
  function isValidPhoneNumber(phone) {
    const regex = /^\+?[0-9]{10,15}$/; 
    //Optional '+' followed by 10 to 15 digits
    return regex.test(phone);
  }
console.log('Phone Number Tests')
    console.log(isValidPhoneNumber('+1234567890')); // true
    console.log(isValidPhoneNumber('1234567890')); // true
    console.log(isValidPhoneNumber('+123456789012345')); // true
    console.log(isValidPhoneNumber('1234567890123456')); // false
    console.log(isValidPhoneNumber('123456789')); // false

  // Returns promo discount based on promo code
  function getPromoDiscount(promoCode) {
    const promos = {
      'RADIANT ME': 20,
      'BRIGHT25': 25,
      'SKINHEALTH': 15,
      'WELCOME10': 10
    }
      
  return promos[promoCode.toUpperCase()] || 0;
  }
console.log('Promo Code Tests')
console.log(getPromoDiscount('RADIANT ME')); // 20
console.log(getPromoDiscount('BRIGHT25')); // 25
console.log(getPromoDiscount('SKINHEALTH')); // 15
console.log(getPromoDiscount('WELCOME10')); // 10


  // Validate Promo Code as active/valid
  function isValidPromoCode(code) {
    const validCodes = ['RADIANT ME', 'BRIGHT25', 'SKINHEALTH', 'WELCOME10'];
    return validCodes.includes(code.toUpperCase());
  }

console.log('Promo Code Validity Tests')
console.log(isValidPromoCode('RADIANT ME')); 
console.log(isValidPromoCode('BRIGHT25')); 
console.log(isValidPromoCode('SKINHEALTH31')); 
console.log(isValidPromoCode('WELCOME5')); 

  // Validate Password features required
  function isValidPassword(PWD) {
    const hasUppercase = /[A-Z]/.test(PWD);
    const hasLowercase = /[a-z]/.test(PWD);
    const hasNumber = /\d/.test(PWD);
    const hasSpecialChar = /[!@#$%^&*]/.test(PWD);
    const isValidLength = PWD.length >= 8;
    return hasUppercase && hasLowercase && hasNumber && hasSpecialChar && isValidLength;
    
  }


console.log('Password Tests')
console.log(isValidPassword('Password123!')); // true
console.log(isValidPassword('password123!')); // false
console.log(isValidPassword('PASSWORD123!')); // false
console.log(isValidPassword('Pass123')); // false
console.log(isValidPassword('Pass123!')); // false
console.log(isValidPassword('Pass1234')); // false
