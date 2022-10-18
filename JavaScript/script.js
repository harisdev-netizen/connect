// typing text animation script
var typed = new Typed(".typing", {
  strings: ["an Engineer", "Front-End Developer", "Database Developer", "Blogger"],
  typeSpeed: 90,
  backSpeed: 40,
  cursorChar: " |",
  smartBackspace: true,
  loop: true,
});

var icon = document.getElementById("icon");

icon.onclick = function() {
  document.body.classList.toggle("dark-theme");
  
  if(document.body.classList.contains("dark-theme")) {
    icon.src = "Images/sun.png";
  } else {
    icon.src = "Images/moon.png";
  }
}
