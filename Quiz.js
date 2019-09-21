(function() {
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
      if (numCorrect > 2){
          window.location = "pass.html";
      }
      else{
        window.location = "fail.html";
      }
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
        question: "What's the mother's name?",
        answers: {
          a: "His name is Pilar.",
          b: "Her name is Pilar.",
          c: "Their name is Pilar.",
          d: "Your name is Pilar."
        },
        correctAnswer: "b"
      },
      {
        question: "There are three ___ on the table",
        answers: {
          a: "cup",
          b: "cups",
          c: "cake",
          d: "plate"
        },
        correctAnswer: "b"
      },
      {
        question: "Is Ramona happy?",
        answers: {
          a: "Yes, she is.",
          b: "Yes, we are.",
          c: "Yes, he is.",
          d: "Yes, they are."
        },
        correctAnswer: "a"
      },
      {
        question: "Read the sentences. Choose the correct answer. Come and visit Carmina's Restaurant. It opens today. It is across from the bank. It is next to the library. The restaurant is open on Wednesday, Thursday, Friday, and Saturday. Welcome to Carmina's! Carmina's restaurant is open___.",
        answers: {
          a: "Sunday",
          b: "Tuesday",
          c: "Saturday",
          d: "Monday"
        },
        correctAnswer: "c"
      }
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })()