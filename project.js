// In your script.js file

const universities = [
    { name: "University of Example", location: "New York" },
    { name: "Another University", location: "California" },
  ];
  
  // Accessing data
  console.log(universities[0].name);  // Output: "University of Example"
  const image = document.getElementById("rotatableImage");
let currentAngle = 0;

image.addEventListener("click", () => {
  currentAngle += 360; // Add 360 degrees on each click
  image.style.transform = `rotate(${currentAngle}deg)`;
});
const buttons = document.querySelectorAll(".user-button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.add("animate__animated", "animate__bounce");
    // Remove animation classes after a short duration to avoid repetition
    setTimeout(() => {
      button.classList.remove("animate__animated", "animate__bounce");
    }, 500);
  });
});
