
// 1. Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    return isDarkMode ? 'Dark mode enabled' : 'Light mode enabled';
  }
  
  // 2. Smooth Scroll to Element
  function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    }
    return false;
  }
  
  // 3. Get Current Year for Copyright
  function getCurrentYear() {
    return new Date().getFullYear();
  }
  
  // 4. Character Counter for Text Inputs
  function countCharacters(inputText, maxLength) {
    const remaining = maxLength - inputText.length;
    return {
      current: inputText.length,
      remaining: remaining,
      isOverLimit: remaining < 0
    };
  }
  
  // 5. Format Currency
  function formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  }
  
  // 6. Create Simple Cookie
  function setCookie(name, value, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  }
  
  // 7. Get Cookie Value
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
  
  // 8. Validate Email Format
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  // 9. Generate Random ID
  function generateRandomId(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  // 10. Format Date
  function formatDate(date, format = 'MM/DD/YYYY') {
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();
    
    return format
      .replace('MM', month)
      .replace('DD', day)
      .replace('YYYY', year);
  }
  
  // 11. Debounce Function (for search inputs, etc.)
  function debounce(func, delay) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), delay);
    };
  }
  
  // 12. Shuffle Array (for randomizing content)
  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  
  // 13. Calculate Reading Time
  function calculateReadingTime(text, wordsPerMinute = 200) {
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes === 1 ? '1 minute read' : `${minutes} minutes read`;
  }
  
  // 14. Get User's Preferred Language
  function getUserLanguage() {
    return navigator.language || navigator.userLanguage || 'en-US';
  }
  
  // 15. Toggle Password Visibility
  function togglePasswordVisibility(passwordInputId) {
    const passwordInput = document.getElementById(passwordInputId);
    if (passwordInput) {
      const newType = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.type = newType;
      return newType === 'text' ? 'Password visible' : 'Password hidden';
    }
    return 'Input not found';
  }