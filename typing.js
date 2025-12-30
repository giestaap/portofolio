const texts = [
  "Hello Everyone....",
  "Welcome to my portfolio",
  "Click to explore...."
];
const typingSpeed = 80;
const deletingSpeed = 50;
const delayAfterTyping = 1200;
const delayAfterDeleting = 500;

const textElement = document.getElementById("typing-text");
const cursorElement = document.getElementById("cursor");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

// cursor blink
setInterval(() => {
  cursorElement.style.opacity =
    cursorElement.style.opacity === "0" ? "1" : "0";
}, 500);

function typeLoop() {
  const currentText = texts[textIndex];

  if (!isDeleting) {
    // typing
    if (charIndex < currentText.length) {
      textElement.textContent += currentText.charAt(charIndex);
      charIndex++;
      setTimeout(typeLoop, typingSpeed);
    } else {
      setTimeout(() => (isDeleting = true), delayAfterTyping);
      setTimeout(typeLoop, delayAfterTyping);
    }
  } else {
    // deleting
    if (charIndex > 0) {
      textElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeLoop, deletingSpeed);
    } else {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeLoop, delayAfterDeleting);
    }
  }
}

typeLoop();
