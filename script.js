const quote=document.getElementById("quote");
const author=document.getElementById("author");
const api_url= "https://api.quotable.io/random";
async function getquote(url){
    const response=await fetch(url);
    var data =await response.json();
    console.log(data);
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}

getquote(api_url);


// function closeQuoteBox() {
//     const quoteBox = document.querySelector('.quote-box');
//     quoteBox.style.display = 'none';
// }

// // Add event listener to the close button
// document.querySelector('button.close').addEventListener('click', closeQuoteBox);

function closeWindow() {
    window.close();
}

// Add event listener to the close button
document.querySelector('button.close').addEventListener('click', closeWindow);

