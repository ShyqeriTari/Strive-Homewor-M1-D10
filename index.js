(function(){
  function buildQuiz(){

    const output = [];

    
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        
        const answers = [];

       
        for(letter in currentQuestion.answers){

          
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    
    const answerContainers = quizContainer.querySelectorAll('.answers');

    
    let numCorrect = 0;

    
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      
      if(userAnswer === currentQuestion.correctAnswer){
        
        numCorrect++;

        
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      
      else{
        
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    },
    {
      question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      answers: {
        a: "Static", 
        b: "Final",
        c: "Private",
        d: "Public"
      },
      correctAnswer: "b"
    },
    {
      question: "The logo for Snapchat is a Bell.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "Pointers were not used in the original C programming language; they were added later on in C++.",
      answers: {
        a: "False",
        b: "True",
      },
      correctAnswer: "a"
    },{
      question: "What is the most preferred image format used for logos in the Wikimedia database?",
      answers: {
        a: ".png",
        b: ".jpeg",
        c: ".svg",
        d: ".gif"
      },
      correctAnswer: "c"
    },
    
  ];

  
  buildQuiz();

  
  submitButton.addEventListener('click', showResults);
})();



