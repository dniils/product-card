const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");
const chevron = document.querySelector("fa-solid");

function removeActive(el) {
  el.classList.remove("active");
}

function toggleActive(el) {
  el.classList.toggle("active");
}

tabs.forEach((el, index) => {
  el.addEventListener("click", () => {
    contents.forEach(removeActive);

    tabs.forEach(removeActive);

    el.classList.add("active");
    contents[index].classList.add("active");
  });
});
