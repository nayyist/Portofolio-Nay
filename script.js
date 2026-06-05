const words = [
  "Student",
  "Programmer",
];

const typingText = document.querySelector(".typing-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2000);
      return;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex++;

      if (wordIndex === words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect();

const learnSection = document.querySelector(".learn");

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){

            document.querySelector(".web").style.width = "45%";
            document.querySelector(".design").style.width = "60%";
            document.querySelector(".graphic").style.width = "80%";
            document.querySelector(".programming").style.width = "70%";

        }
    });
});

skillObserver.observe(learnSection);

const form = document.querySelector(".contact-form");
const toast = document.getElementById("toast");

form.addEventListener("submit", function(e){
    e.preventDefault();

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

    form.reset();
});

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));