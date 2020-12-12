let button = document.querySelector("#button")

let resultTitle = document.querySelector('#resultTitle');
let firstResult = document.querySelector('#firstResult');
let secondResult = document.querySelector('#secondResult');
let thirdResult = document.querySelector('#thirdResult');
let link = document.querySelector('.link');

button.addEventListener("click", apiCall);

async function apiCall() {

    // styling the search results container
    let searchResultsContainer = document.querySelector(".search-results-container");
    searchResultsContainer.style.backgroundColor = "pink";


    let searchInputValue = document.querySelector('#search-input').value;
    searchInputValue = searchInputValue.split(" ").join("_");
    if (searchInputValue === ''){
        alert('Search for something ejoor 😙');
        return false;
    }
    let fetchUrl = await fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=30&srsearch=%27' + searchInputValue);
    let data = await fetchUrl.json();
    console.log(data);


    // Result output
    resultTitle.innerText =  "Showing search results for " + data.query.search[0].title;
    firstResult.innerHTML = "* " + data.query.search[0].snippet;
    secondResult.innerHTML = "** " + data.query.search[1].snippet;
    thirdResult.innerHTML = "*** " + data.query.search[2].snippet;
    link.href = "https://en.wikipedia.org/wiki/" + searchInputValue;
    link.innerText = "Learn More";
}