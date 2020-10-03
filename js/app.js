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
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayQuote(data.quote);
  } catch (error) {
    console.log(error);
  }
};
console.log(quoteCategory);
const displayQuote = (quote) => {
  quoteContainer.textContent = `“${quote.quoteText}”`;
  authorName.textContent = quote.quoteAuthor;
  quoteCategory.textContent = quote.quoteGenre;
};

nextQuote.addEventListener("click", () => {
  fetchQuote();
});

// All quotes by author
const allQuotesBySpecificAuthor = async (quoteByAuthor) => {
  try {
    const response = await fetch(quoteByAuthor);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// authorName.addEventListener("click", () => {
//   const authorFullName = `${firstName.textContent} ${lastName.textContent}`;
//   const quoteByAuthor = `https://quote-garden.herokuapp.com/api/v2/genre/:business?page=1&limit=10`;
//   allQuotesBySpecificAuthor(quoteByAuthor);
// });
