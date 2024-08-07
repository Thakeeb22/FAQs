var questions = document.querySelectorAll(".quest");
questions.forEach(function (question) {
  var showSign = question.querySelector(".show-sign");
  var answer = question.querySelector(".answer");
  question.addEventListener("click", function () {
    answer.classList.toggle("show");
    if (answer.classList.contains("show")) {
      showSign.src = "./assets/images/icon-minus.svg";
    } else {
      showSign.src = "./assets/images/icon-plus.svg";
    }
  });
});
