window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("#textCopy").focus(event)
  event.preventDefault();

const textCopy = document.querySelector("#textCopy");
const copyBtn = document.querySelector(".copyBtn");
const textArea = document.querySelector("textarea")
textCopy.classList.add('your-class');
textArea.classList.add('your-class');
textCopy.onfocus = function (e){
  e.preventDefault();
  this.removeAttribute("placeholder");
};
textArea.onfocus = function (e){
  e.preventDefault();
  this.removeAttribute("placeholder");
};
  
copyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  // select() -> text will be selected
  textCopy.select();
  let v = textCopy.value;
  textCopy.setSelectionRange(0, 99999);
  
  //execCommand which will help to copy some selected things
  document.execCommand("copy");
  copyBtn.classList.toggle("successful")
  copyBtn.innerText = "Copied!";
  textArea.addEventListener('pointerdown', function(e){
     e.preventDefault();
      this.value = v;
      this.setAttribute("style", "outline: none !important; border:1px solid #5b0eeb; box-shadow: 0 0 10px #5b0eeb;")
  });
  
  setTimeout(() => {
      copyBtn.classList.toggle("successful");
      copyBtn.innerText = "Copy!";
      textCopy.addEventListener('pointerdown', function(e){
         e.preventDefault();
         this.value = " ";
         this.setAttribute("placeholder", "Type here...");
         this.classList.add('your-class');  
  });
    textCopy.addEventListener('focusout', function(e){
     e.preventDefault();
     this.removeAttribute("style", "outline: none !important; border:1px solid #5b0eeb; box-shadow: 0 0 10px #5b0eeb;") 
  });
    
    textArea.addEventListener('pointerdown', function(e){
     e.preventDefault();
      this.value = " ";
      this.setAttribute("placeholder", "Keep cursor here to paste copied text...");
      this.classList.add('your-class');  
  });
  }, 2000);
  
  });
});