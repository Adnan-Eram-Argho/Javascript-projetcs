var arrayOfQuotes = [
{
    "author": "Dalai Lama",
    "quote":"The purpose of our lives is to be happy."
},
{
    "author":"Stephen King",
    "quote":"Life is what happens when you’re busy making other plans"
},
{
    "author": "Dalai Lama",
    "quote":"The purpose of our lives is to be happy."
},
{
    "author":"Stephen King",
    "quote":"Life is what happens when you’re busy making other plans"
},
{
    "author": "Dalai Lama",
    "quote":"The purpose of our lives is to be happy."
}
]
function randomSelector(arraylength) {
    return Math.floor(Math.random()*arraylength)
}
function generateQuote() {
    var randomNumber = randomSelector(arrayOfQuotes.length);

    document.getElementById("quoteOutput").innerHTML = '"'+arrayOfQuotes[randomNumber].quote+'"';
    document.getElementById("authorOutput").innerHTML = "- "+arrayOfQuotes[randomNumber].author;
}