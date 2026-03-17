import quiz from "./quiz-femmes-scientifiques.json" assert { type: "json" };

export function startQuiz() {
  const app = document.getElementById("app");
  const questions = quiz.questions;

  app.innerHTML = `
<header>
    <h1>${quiz.title}</h1>
    <p></p> 
</header>
    
<div>
  <h2></h2>
</div>

<div>
  <input class="opt" type="button" />
  <input class="opt" type="button" />
  <input class="opt" type="button" />
  <input class="opt" type="button" />  
</div>

<div>
  <h3></h3>
</div>

<input class="next" type="button" value="Question Suivante" />  
`;

  let newQuestion = 0;
  let scoreQuestion = 0;
  let longeur = questions.length;
  let compteur = 1;

  function afficherQuestion() {
    const plus = questions[newQuestion];
      document.querySelector("p").textContent = `${compteur}/${longeur}`
      compteur ++; 
    
      document.querySelector("h2").textContent = plus.question;

    const opt = document.querySelectorAll(".opt");
    opt.forEach((btn, i) => {
      btn.value = plus.options[i];
      btn.onclick = () => {
        if (i === plus.correctIndex) {
          document.querySelector("h3").textContent = "Bonne réponse";
          scoreQuestion++; 
          scoreQuestion >5;
          document.querySelector("h3").style.color="green";
        
          
        } else {
          document.querySelector("h3").textContent = "Mauvaise réponse";
          scoreQuestion <5;
          document.querySelector("h3").style.color="orange";
        }

        document.querySelector(".next").style.display = "block";
      };
    });

    document.querySelector("h3").textContent = "";
    document.querySelector(".next").style.display = "none";
  }

  afficherQuestion();

  const boutonQS = document.querySelector(".next");
  boutonQS.addEventListener("click", () => {
    newQuestion++;

    if (newQuestion < longeur) {
      afficherQuestion();
       
    } else {
      document.querySelector("h2").textContent = "Quiz terminé!";
      document.querySelector("h3").textContent = `Tu as ${scoreQuestion}/${longeur}`;
      document.querySelector(".next").value = "RESET";
      boutonQS.addEventListener("click", () => { 
      startQuiz ();
      });
    }
  });
}

