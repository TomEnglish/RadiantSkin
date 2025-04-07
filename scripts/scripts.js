


  
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

  // Validate Password Strength
  function getPromoDiscount(promoCode) {
    const promos = {
      'RADIANT ME': 20,
      'BRIGHT25': 25,
      'SKINHEALTH': 15,
      'WELCOME10': 10
    }
  }

  // Validate Promo Code as active/valid
  function isValidPromoCode(code) {
    const validCodes = ['RADIANT ME', 'BRIGHT25', 'SKINHEALTH', 'WELCOME10'];
    return validCodes.includes(code.toUpperCase());
  }

  // Validate Password features required
  function isValidPassword(email) {
    const hasUppercase = /[A-Z]/.test(email);
    const hasLowercase = /[a-z]/.test(email);
    const hasNumber = /\d/.test(email);
    const hasSpecialChar = /[!@#$%^&*]/.test(email);
    const isValidLength = email.length >= 8;
    return hasUppercase && hasLowercase && hasNumber && hasSpecialChar && isValidLength;
    
  }