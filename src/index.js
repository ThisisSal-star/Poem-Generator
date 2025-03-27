function displayPoem(response) {
  new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor:"",
  });        
}

function generatePoem(event){
    event.preventDefault()
let instructionInput = document.querySelector("#prompt")
    let apiKey = "ad031o47ac65t5df81db4b9e365cb480";
    let context = "you are an intelligent AI that knows lots of poem, generate the shortest poem on soul script emphasizing deep emotions";
    let prompt= `User instructions:Generate a soul searching poem  about ${instructionInput.value}. Make sure to follow the user intruction`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayPoem);

                    
}

let poemElement = document.querySelector("#poemform-generator");
poemElement.addEventListener("submit" , generatePoem)