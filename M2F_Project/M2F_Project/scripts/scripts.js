

  //  Smooth Scroll to Element
  function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    }
    return false;
  }
  
  
  // Character Counter for Text Inputs
  function countCharacters(inputText, maxLength) {
    const remaining = maxLength - inputText.length;
    return {
      current: inputText.length,
      remaining: remaining,
      isOverLimit: remaining < 0
    };
  }
  
  
  //  Create Simple Cookie
  function setCookie(name, value, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  }
  
  //  Get Cookie Value
  function getCookie(name) {
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
      const cookiePair = cookieArr[i].split('=');
      if (name === cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  }
  
  // Validate Email Format
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  
  // Toggle Password Visibility
  function togglePasswordVisibility(passwordInputId) {
    const passwordInput = document.getElementById(passwordInputId);
    if (passwordInput) {
      const newType = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.type = newType;
      return newType === 'text' ? 'Password visible' : 'Password hidden';
    }
    return 'Input not found';
  }