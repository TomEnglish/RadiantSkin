


  
  // Character Counter for Text Inputs
  function countCharacters(inputText, maxLength) {
    const remaining = maxLength - inputText.length;
    return {
      current: inputText.length,
      remaining: remaining,
      isOverLimit: remaining < 0
    };
  }
  

  // Validate Email Format
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  

  // Validate Phone Number Format
  function isValidPhoneNumber(phone) {
    const regex = /^\+?[0-9]{10,15}$/; 
    return regex.test(phone);
  }

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

  // Validate Promo Code as active/valid
  function isValidPromoCode(code) {
    const validCodes = ['RADIANT ME', 'BRIGHT25', 'SKINHEALTH', 'WELCOME10'];
    return validCodes.includes(code.toUpperCase());
  }

  // Validate Password features required
  function isValidPassword(pwd) {
    const hasUppercase = /[A-Z]/.test(pwd);
    const hasLowercase = /[a-z]/.test(pwd);
    const hasNumber = /\d/.test(pwd);
    const hasSpecialChar = /[!@#$%^&*]/.test(pwd);
    const isValidLength = pwd.length >= 8;
    return hasUppercase && hasLowercase && hasNumber && hasSpecialChar && isValidLength;
    
  }