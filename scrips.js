const deg = document.querySelectorAll(".degree span ");
const skills = document.querySelector(".kill");
window.onscroll = function () {
  if (window.scrollY >= skills.offsetTop - 200) {
    deg.forEach((one) => (one.style.width = one.dataset.width));
  } else {
    deg.forEach((one) => (one.style.width = "0"));
  }
};
