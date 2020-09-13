const input = document.querySelector("#number-of-quotes");
const getQuotesButton = document.querySelector(".get-quotes");
const container = document.querySelector(".container");
const header = document.querySelector(".header");
const quoteContainer = document.createElement("div");

input.addEventListener("input", (e) => {
  if (e.target.value) {
    getQuotesButton.disabled = false;
  } else {
    getQuotesButton.disabled = true;
  }
});

// Random Quote
const url = "https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=";

const fetchQuotes = async (limit) => {
  try {
    const response = await fetch(url + limit);
    const data = await response.json();
    console.log(data);
    displayQuotes(data.quotes);
  } catch (error) {
    console.log(error);
  }
};

const displayQuotes = (quotes) => {
  let output = "";
  console.log(quotes);
  quotes.map((quote) => {
    output += `
    <div class='container'>

        <div class='quote'>
            <div>
                <div>
                    <span id="yellow-bar">
                    </span>
                </div>

                <p class="quote-content">
                    ${quote.quoteText}
                </p>
            </div>
        </div>

    <div class="details">
        <div class="author">
            <a href="#">
                <span class="first-name">${
                  quote.quoteAuthor.split(" ")[0]
                }</span>
                <span class="last-name">${
                  quote.quoteAuthor.split(" ")[1]
                    ? quote.quoteAuthor.split(" ")[1]
                    : ""
                }</span>
            </a>
        </div>
    </div>
</div>1
`;
  });
  if (quoteContainer) {
    quoteContainer.innerHTML = "";
    quoteContainer.innerHTML = output;
    output = "";
  } else {
    console.log("card is empty");
  }
  container.parentElement.insertBefore(
    quoteContainer,
    container.nextElementSibling
  );
};

getQuotesButton.addEventListener("click", (e) => {
  e.preventDefault();
  fetchQuotes(input.value);
});
