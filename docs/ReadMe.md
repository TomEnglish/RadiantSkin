### README File (3 points)
- Create a detailed README.md with:
  - The website I emulated was novoslabs.com

  I tried to emulate a number of the elements from their website and their overall aesthetic. I liked the page that scrolled under translucent banners and other banners that move with the page while having text scroll accross the screen. Their website has a clean, minimal, and modern design aesthetic. Thier pallate is simple and seems elegant to me with a spectrum of orange, beige background and black and white text. In other pars of their pages were some color gradient that incorporated a bit of purple. Their stylistic photos seems to hilight orange and purple. They have a promotional banner with discounts and buttons with calls to action. Their sit portray an image of science, vitality and premium brand quality. 
  
  They used quite a bit more media and dynamic text than me, but I beleive I was able to imulate most of the style with some similarish photos and a little dynamic text. I was able to copy the Navbar and footer sections nearly identically. 
  
  - Explanation of how you used Bootstrap components

  I tried to use as much bootstrap as possible to learn bootstrap better and to avoid having to write new css for responsiveness which seems quite cumbersome in comparison. I used containers for the largest units of my pages and for all of teh sections and central componeents.  I used a navbar and nav styling funcitons including a collapsing menu "hamburger", a boostrap table and an accordian table replacement for smaller screens, mulitple bootstrap forms and bootstrap cards.  

  I used many bootstrap spacing and styling utilities including every combination of margin and padding on the y-axis and 
  both 'justify-content-center' and align-items-center' in a few places to center content in both x & x axis in their containers. I used the d-none funciton to turn off displays of content in line with desired responsiveness behaviors. In a few places I used position utilites such as postion-fixed to get the behavior similar to the website I am mimicing. 

  I implemented two forms with multiple input fields (with checks) a checkbox and a few buttons. I also used mostly bootstrap style utilities including background colors, text colors and some shadowing.  

  Despite some of bootstraps general responsiveness I found the first version of my table was not very usable/viewable a mobile phone. I then learned of and incorporated a replacement with accordian content. I stuck with a custom css gradient for my banner as I found the method of using SASS variables a bit cumbersome for the small number of uses on my website.  For scrolling text I only found css examples and given their brevity applied then over potnetial bootstrap alternatives.

  I also found and used the bootstrap icons for the various social media links such as facebook: "bi bi-facebook."

  Overall I found the boostrap functions/utilities easier and cleaner to use (once known) than the css alternatives and reckon I'll default to bootstrap styling whenever possible (unless a newer slicker package beats it out)



  - Summary of each JavaScript function and future integration plans

  function countCharacters(inputText, maxLength) 
  // Character Counter for Text Inputs - will the input from our form textarea and determine if it's small enough.  This will probably be defined by the backend DB or other constraints.  Returns three items for us to display to the user: current length, remaining text and whetehr the current text isover the length limit.

  function isValidEmail(email) 
  // Validate Email Format - uses a regex test to see if the given email is valid in an input element. Returns true if so, false if not. 

  // Validate Phone Number Format
  function isValidPhoneNumber(phone) - uses a regex text to see if the given phone input has a vlaid format.  Returns true if so, false if not. 

  // Validate Password features required
  function isValidPassword(email) - combines a number of password rules and combines them.  Returns a true if and only if all are met.  Returns false otherwise. 
 
  // Validate Promo Code as active/valid - determines if input code is in the array of promo options - returns true if so, false if not

  // Returns promo discount based on promo code or zero if nothing found/matched 
   function getPromoDiscount(promoCode) - takes a promo code and returns the discount 


  Future Integration Plans: I have mostly create simple validations for various inputs which would be used to match the backend data requirements once those are specified/known. One of the first simple validation would likely be on a popup offer that captures email and phone for a discount or other promo offer. 

  The promo discount validdator and finder would need to be integrated with a checkout page and forms or utility and would probably be handled by whatever third party checkout tool we went with. 


  