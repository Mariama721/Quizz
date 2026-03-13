
const bouton = document.createElement("button");
bouton.textContent = "Démarrer";
document.body.appendChild(bouton);

bouton.addEventListener('click', async () => {
bouton.remove ()
const { questions } = await import('./questions.js')
questions()
});



