const tabs = document.querySelectorAll(".tabs__item");
const contents = document.querySelectorAll(".content");

function removeActive(el) {
  el.classList.remove("active");
}

tabs.forEach((el, index) => {
  el.addEventListener("click", () => {
    contents.forEach(removeActive);

    tabs.forEach(removeActive);

    el.classList.add("active");
    contents[index].classList.add("active");
  });
});
