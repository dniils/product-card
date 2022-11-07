const forms = document.querySelectorAll(".content__input-wrapper");

function addItem(text, features) {
  const li = document.createElement("li");
  li.classList.add("content__features-item");
  li.textContent = text;

  features.appendChild(li);
}

forms.forEach((el) => {
  el.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector(".active .content__input");
    const features = document.querySelector(".active .content__features-items");

    if (input.value.trim()) {
      addItem(input.value.trim(), features);
    }

    input.value = "";
  });
});
