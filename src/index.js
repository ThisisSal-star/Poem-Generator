function generatePoem(event){
    event.preventDefault()

            new Typewriter('#poem', {
                strings: "Hold fast to dreams",
                autoStart: true,
                delay: 2,
                cursor:"",
              });                 
}

let poemElement = document.querySelector("#poemform-generator");
poemElement.addEventListener("click" , generatePoem)