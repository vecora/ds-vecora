var FAQ = window.FAQ = {};

FAQ.questionSelector = "dl.faq dt";

FAQ.questions = document.querySelectorAll(FAQ.questionSelector);

FAQ.questions.forEach(function(question) {

  question.addEventListener("click", function(event) {

    var question = event.target;
    var answer = question.nextElementSibling;

    if (question.classList.contains("collapsed")) {
      answer.style.height = answer.scrollHeight + "px";
    } else {
      answer.style.height = "0px";
    }

    question.classList.toggle("collapsed");

  });


});



// Initialize

FAQ.questions.forEach(function(question) {
  question.classList.add("collapsed");
  var answer = question.nextElementSibling;
  answer.style.height = "0px";
});
