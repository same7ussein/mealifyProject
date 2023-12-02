const listItems = document.querySelectorAll(".nav-container ul li");
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    listItems.forEach((li) => {
      li.classList.remove("active");
    });
    item.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-bar a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("check").checked = false;
    });
  });
});
