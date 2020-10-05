const input = document.querySelector("#number-of-quotes");
const getQuotesButton = document.querySelector("#get-quotes");
const container = document.querySelector("#quote-sibling");
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
  let loader = `
  <div class="loader-dots text-center text-success">
  Loading
</div>
  `;
  quoteContainer.innerHTML = loader;
  try {
    const response = await fetch(url + limit);
    const data = await response.json();
    displayQuotes(data.quotes);
  } catch (error) {
    console.log(error);
  }
};

const displayQuotes = (quotes) => {
  let output = "";

  quotes.map((quote) => {
    output += `
    <div class="col-12  ">
                    <div class="card border-0 quote-card my-2  h-100 mb-5">
                        <div class="card-body card-content">
                            <blockquote class="blockquote mb-0">
                                <p id="quote-content"> “${quote.quoteText}”</p>
                                <div class="d-flex justify-content-center">
                                    <button class="btn">
                                        <svg id="heart" class="text-warning w-auto m-auto" width="1em" height="1em"
                                            viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                        </svg>
                                    </button>
                                </div>

                            </blockquote>
                        </div>

                        <div id="quote-info" class="card   p-1 border-0 w-75 mx-auto mb-4 shadow text-center">
                            <div>
                                <a href="quotesbyauthor.html">
                                    <p id="author-name">${
                                      quote.quoteAuthor
                                        ? quote.quoteAuthor
                                        : `Unknown`
                                    }</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

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
