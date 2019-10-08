var FAQ = window.FAQ = {};

FAQ.questionSelector = "dl.faq dt";

FAQ.questions = document.querySelectorAll(FAQ.questionSelector);

FAQ.questions.forEach(function(question) {

  question.addEventListener("click", function(event) {

    var question = event.target;
    // var answer = question.nextElementSibling;

    if (question.classList.contains("hide")) {
      question.classList.replace("hide", "show")
    } else {
      question.classList.replace("show", "hide")
    }

  });


});



// Initialize

FAQ.questions.forEach(function(question) {
  question.classList.add("hide");
});
