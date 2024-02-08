window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  
  function scrollToElement(elementId, duration = 1000) {
    const element = document.getElementById(elementId);
    if (!element) return;
  
    let start = null;
    const initialPosition = window.pageYOffset;
    const targetPosition = element.getBoundingClientRect().top 
    const maxScroll = document.body.scrollHeight - window.innerHeight;
  
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const currentPosition = Math.min(initialPosition + (targetPosition * progress) / duration, maxScroll);
      window.scrollTo(0, currentPosition);
      
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
    
    window.requestAnimationFrame(step);
  }
  
  document.addEventListener('DOMContentLoaded', (event) => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      scrollToElement(hash, 100);
    }
  });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    let projectListItems = document.querySelectorAll(".project-list li");
    let projectDescriptions = document.querySelectorAll(".project-description");
  
    projectListItems.forEach((item) => {
      item.addEventListener("click", function () {
        projectListItems.forEach((i) => i.classList.remove("active"));
  
        this.classList.add("active");
  
        projectDescriptions.forEach((desc) => desc.classList.remove("active"));
  
        let projectToShow = document.querySelector(
          `.project-description[data-project="${this.dataset.project}"]`
        );
        projectToShow.classList.add("active");
      });
    });
  });
  
  
  const titles = [
    "Full-Stack Developer",
    "Software Engineer",
    "Web Designer",
    "UI/UX Designer",
  ];
  const textElement = document.getElementById("dynamic-text");
  let currentTitleIndex = 0;
  let charIndex = 0;
  let typingDelay = 100;
  let erasingDelay = 100;
  let newTextDelay = 1000;
  
  function type() {
    if (charIndex < titles[currentTitleIndex].length) {
      textElement.textContent += titles[currentTitleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      textElement.textContent = titles[currentTitleIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      currentTitleIndex = (currentTitleIndex + 1) % titles.length;
      setTimeout(type, typingDelay + 1100);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    if (titles.length) setTimeout(type, newTextDelay + 250);
  });
  