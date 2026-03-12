const bouton = document.createElement("button");
bouton.textContent = "Démarrer";
document.body.appendChild(bouton);

bouton.addEventListener('click', async () => {
const { questions } = await import('./questions.js')
questions()
})

