const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");

document.querySelectorAll(".openModal").forEach(function (element) {
  element.addEventListener("click", function () {
    const src = element.getAttribute("src");
    modalImage.setAttribute("src", src);

    const alt = element.getAttribute("alt");
    modalImage.setAttribute("alt", alt);

    setTimeout(() => {
      modal.classList.remove("hidden");
    }, 300);
  });
});

document.querySelectorAll(".closeModal").forEach(function (element) {
  element.addEventListener("click", function () {
    modalImage.setAttribute("src", "");
    modalImage.setAttribute("alt", "");

    setTimeout(() => {
      modal.classList.add("hidden");
    }, 300);
  });
});
