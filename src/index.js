function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "ad031o47ac65t5df81db4b9e365cb480";
  let context =
    "You are a quote expert and love to write short quotes. You mission is to generate a 3 line quote in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the quote. Sign the quote with '💕💕' inside a <strong> element at the end of the quote and NOT at the beginning";
  let prompt = `User instructions: Generate a soft and intimate quote about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">⏳ Generating a soft and intimate quote about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);