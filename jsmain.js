const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());


document.addEventListener("DOMContentLoaded", function () {
  const texts = [
    "Welcome to my portfolio!",
      "I'm a Web Developer.",
      "I'm a Mobile App Developer.",
      "UI/UX Designer."
     
  ]; // Array of texts to be typed
  const typingText = document.getElementById("typing-text");
  let index = 0; // Index for the current text
  let charIndex = 0; // Index for the current character in the text
  let currentText = texts[index]; // Current text to type

  function type() {
      if (charIndex < currentText.length) {
          typingText.textContent += currentText.charAt(charIndex); // Append the next character
          charIndex++;
          setTimeout(type, 100); // Adjust speed by changing the timeout (100ms is a good start)
      } else {
          // Wait for 2 seconds after typing the full text
          setTimeout(() => {
              // Prepare to type the next text
              charIndex = 0; // Reset character index
              index = (index + 1) % texts.length; // Cycle through texts
              currentText = texts[index]; // Update to the next text
              typingText.textContent = ""; // Clear the text before typing again
              type(); // Start typing the new text
          }, 2000); // Wait 2 seconds before changing text
      }
  }

  type(); // Start typing effect
});

// Select all sections
const sections = document.querySelectorAll('section');

// Function to add the animation class when a section is in view
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the 'fade-in' class to the section
      entry.target.classList.add('fade-in');
    } else {
      // Optionally, remove the class if you want to animate again on scroll back
      entry.target.classList.remove('fade-in');
    }
  });
}, {
  threshold: 0.1 // Adjust threshold as needed (0 to 1)
});

// Observe each section
sections.forEach(section => {
  sectionObserver.observe(section);
});


document.addEventListener("DOMContentLoaded", function () {
  // Create an Intersection Observer
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add show class to fade in
      } else {
        entry.target.classList.remove("show"); // Remove show class to fade out
      }
    });
  }, {
    threshold: 0.2 // Trigger when 20% of the element is visible
  });

  // Select all project content elements
  let projectItems = document.querySelectorAll(".projects-content");

  // Observe each project item
  projectItems.forEach(item => {
    observer.observe(item);
  });
});

let currentIndex = 0;
  const images = document.querySelectorAll('.grid-image');
  const descriptions = [

    'Wooowww',
    'Jabileee',
    'Pizzaa tapos Honda Civic',

    '@reotutars',
    'First Day of School hahhaa',
    'OGs',
  
    'nakss bonding','eatweell yum','@diko na alam','#bwhaha yung nakatayo baliw'
  ];

  function openModal(image, description) {
    document.getElementById('modal').style.display = 'block';
    updateModal(image.src, description);
    currentIndex = Array.from(images).indexOf(image); // Save current image index
  }

  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }

  function updateModal(imageSrc, description) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalDescription').textContent = description;
  }

  function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    const nextImage = images[currentIndex];
    const nextDescription = descriptions[currentIndex];
    updateModal(nextImage.src, nextDescription);
  }
