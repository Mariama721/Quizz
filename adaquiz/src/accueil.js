
import quiz from "./quiz-femmes-scientifiques.json" assert { type: "json" };

const app = document.getElementById("app");

app.innerHTML = `
  <h1>${quiz.title}</h1>
  <button id="start">Démarrer</button>
`;

document.getElementById("start").addEventListener("click", async () => {
  const module = await import("./question-suivante.js");
  module.startQuiz();
});
