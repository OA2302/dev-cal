const stars = document.querySelectorAll(".star");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    stars.forEach((s) => s.classList.remove("active"));
    star.classList.add("active");
  });
});
const main = document.querySelector('main');
const submitBtn = document.querySelector('#submit-btn');
const successAlert = document.querySelector('#success-alert');

main.addEventListener('submit', (event) => {
 event.preventDefault();
 // Send form data to server here
 successAlert.classList.add('show');
});

submitBtn.addEventListener('click', () => {
 main.submit();
});