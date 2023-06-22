// Retrieve DOM elements
// TODO: Get references to the required DOM elements using document.getElementById()
const poster = document.querySelector('.poster');
const img = poster.querySelector('#poster-image');
const title = poster.querySelector('#poster-title');
const quote = poster.querySelector('#poster-quote');

const posterForm = document.querySelector("#poster-form");

// Array of predefined poster objects
const posters = [
  {
    image: 'https://media.istockphoto.com/id/1255203350/photo/teamwork-friendship-hiking-help-each-other-trust-assistance-silhouette-in-mountains-sunrise.jpg?s=612x612&w=0&k=20&c=XU9MhkkMdyM59gAMDSUwltr-LhVyjWHLvTxQCPwVbF8=',
    title: 'Climbing the top',
    quote: 'The hardest mountain to climb is the one within',
  },
  {
    image: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
    title: 'Dream Big',
    quote: 'Anyone can dream big',
  },
  {
    image: 'https://i.etsystatic.com/34105328/r/il/380455/4018386002/il_fullxfull.4018386002_29nj.jpg',
    title: 'Lightbulb',
    quote: 'Good idea for big opportunity',
  },
  // Add more poster objects as needed
];

// Event listener for randomize button
// TODO: Add an event listener to the randomizeButton that calls a function when clicked
let pushBtn = document.querySelector("#randomize");
pushBtn.addEventListener("click", (event) => {
    generateRandomPoster();
});

// Event listener for submit button
// TODO: Add an event listener to the submitButton that calls a function when clicked
let submitBtn = posterForm.querySelector("#submit");
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    generateCustomPoster(event);
    posterForm.reset();
});

// Function to generate a random poster
function generateRandomPoster() {
    
    // TODO: Generate a random index within the range of the posters array length
    let ranIndex = Math.floor(Math.random() * posters.length);

    // TODO: Retrieve the random poster object from the posters array
    let ranPoster = posters[ranIndex];

    // TODO: Call the function to update the DOM with the values from the random poster object
    updatePoster(ranPoster.image, ranPoster.title, ranPoster.quote);
}

// Function to generate a custom poster
function generateCustomPoster(event) {
    event.preventDefault();
  
    // TODO: Retrieve the entered quote and author from the input fields
    let formTitle = document.getElementById("poster-form-title").value
    let formQuote = document.getElementById("poster-form-quote").value
    let imgLink = document.getElementById("poster-form-imgLink").value

    // TODO: Create a custom poster object with the entered values
    posters.push({image: imgLink, title: formTitle, quote: formQuote});

    // TODO: Call the function to update the DOM with the values from the custom poster object
    updatePoster(imgLink, formTitle, formQuote);


}

// Function to update the poster content in the DOM
function updatePoster(imageUrl, title, quote) {
    // TODO: Update the DOM with the values provided for the poster image, title, and quote
    img.setAttribute("src", imageUrl);
    title.textContent = title;
    quote.textContent = quote;
}