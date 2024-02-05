window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    let projectListItems = document.querySelectorAll(".project-list li");
    let projectDescriptions = document.querySelectorAll(
      ".project-description"
    );

    projectListItems.forEach((item) => {
      item.addEventListener("click", function () {
        projectListItems.forEach((i) => i.classList.remove("active"));

        this.classList.add("active");

        projectDescriptions.forEach((desc) =>
          desc.classList.remove("active")
        );

        let projectToShow = document.querySelector(
          `.project-description[data-project="${this.dataset.project}"]`
        );
        projectToShow.classList.add("active");
      });
    });
  });
  document.addEventListener("mousemove", function (e) {
    const follower = document.querySelector(".follower");
    const bgImage = document.querySelector(".bg-image");

    follower.style.left = e.pageX + "px";
    follower.style.top = e.pageY + "px";

    const moveX = (e.pageX * -1) / 20;
    const moveY = (e.pageY * -1) / 20;

    bgImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  const titles = [
    "Full-Stack Developer",
    "Software Engineer",
    "Web Designer",
    "UI/UX Designer"
  ];
  const textElement = document.getElementById("dynamic-text");
  let currentTitleIndex = 0;
  let charIndex = 0;
  let typingDelay = 100;
  let erasingDelay = 100;
  let newTextDelay = 1000; 

  function type() {
    if (charIndex < titles[currentTitleIndex].length) {
      textElement.textContent +=
        titles[currentTitleIndex].charAt(charIndex);
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