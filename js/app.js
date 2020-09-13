const quoteContent = document.querySelector(".quote-content");
const nextQuote = document.querySelector("#next-quote");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const quoteCategory = document.querySelector(".category");

const url = "https://quote-garden.herokuapp.com/api/v2/quotes/random";

const fetchQuote = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.quote);
    displayQuote(data.quote);
  } catch (error) {
    console.log(error);
  }
};

const displayQuote = (quote) => {
  quoteContent.textContent = `“${quote.quoteText}”`;
  firstName.textContent = quote.quoteAuthor.split(" ")[0];
  lastName.textContent = quote.quoteAuthor.split(" ")[1];
  quoteCategory.textContent = quote.quoteGenre;
};

nextQuote.addEventListener("click", () => {
  fetchQuote();
});

// nextQuote.onClick = fetchQuote;
