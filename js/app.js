const quoteContainer = document.querySelector("#quote-content");
const nextQuote = document.querySelector("#next-quote");
const authorName = document.querySelector("#author-name");
const quoteCategory = document.querySelector("#quote-genre");

// const authorName = document.querySelector(".author a");
const spinner = document.querySelector(".bi.bi-arrow-repeat");

// Random Quote
const url = "https://quote-garden.herokuapp.com/api/v2/quotes/random";

// Quotes By Specific Author

const fetchQuote = async () => {
  let loader = ` 
     <div class="loader-dots">
        Loading
    </div>
`;

  quoteContainer.innerHTML = loader;
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayQuote(data.quote);
  } catch (error) {
    console.log(error);
  }
};

const displayQuote = (quote) => {
  quoteContainer.textContent = `“${quote.quoteText}”`;
  authorName.textContent = quote.quoteAuthor;
  quoteCategory.textContent = quote.quoteGenre;
};

nextQuote.addEventListener("click", () => {
  fetchQuote();
});
