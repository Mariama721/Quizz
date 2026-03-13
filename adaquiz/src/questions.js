const questions = [
  {
    question: "Qui est considérée comme la première programmeuse de l’histoire ?",
    options: ["Grace Hopper", "Ada Lovelace", "Dorothy Vaughan", "Margaret Hamilton"],
    correctIndex: 1
  },
];



const app = document.getElementById("app");





app.innerHTML = `

<header>
    <h1>Femmes scientifiques célèbres</h1>
</header>
    
    <div>
    <h2>${questions[0].question}</h2>
    </div>

    <div>
    <input class="opt" type="button" value="${questions[0].options[0]}"/>
    <input class="opt" type="button" value="${questions[0].options[1]}"/>
    <input class="opt" type="button" value="${questions[0].options[2]}"/>
    <input class="opt" type="button" value="${questions[0].options[3]}"/>  
    </div>

    <div>
    <h3></h3>
    </div>

   


    <input class="next" type="hidden" value="Question Suivante" />


    

`;

const opt = document.querySelectorAll(".opt");
const reponse = document.querySelector("h3");
const boutonQS = document.querySelector(".next")

opt.forEach((element,index) => {
    element.addEventListener("click", function(){

if (index === questions[0].correctIndex) {
     reponse.textContent = "Bonne réponse";
     boutonQS.type = "button" 
} else {
    reponse.textContent = "Mauvaise réponse";
    boutonQS.type = "button" ;
}

    })
})




