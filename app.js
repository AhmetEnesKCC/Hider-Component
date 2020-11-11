const arrow = document.getElementsByClassName("arrow");
const container = document.getElementsByClassName("container");
const hider = document.getElementsByClassName("hider");
const close_btn = document.getElementsByClassName("close_btn");
const enter_form = document.getElementsByClassName("enter_form");
const enter = document.getElementsByClassName("enter");
const text = document.getElementsByClassName("text");
const input_text = document.getElementsByClassName("input_text");
arrow[0].addEventListener("click", () => {
  hider[0].style.transform = "translateX(100%)";
  close_btn[0].style.transform = "translateX(220px)";
  setTimeout(() => {
    close_btn[0].style.display = "unset";
  }, 1000);
});

close_btn[0].addEventListener("click", () => {
  console.log("POP");
  hider[0].style.transform = "none";
  close_btn[0].style.display = "none";
});

enter_form[0].addEventListener("submit", e => {
  e.preventDefault();
  enter[0].style.display = "none";
  container[0].style.display = "unset";
  text[0].innerHTML = input_text[0].value;
});
