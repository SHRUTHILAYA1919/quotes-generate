const quote =  [ "Forgiveness is the power to choose how things affect you","Forgiveness is choosing to be happy","The future depends on what you do today","We experience what we intend for others","Fear is wisdom as a child","Forgiveness is an act of willingness not an act of will",
    "It’s all about daily, consistent action","The best things in life aren't things","Stay hungry, stay foolish","Mistakes are proof that you are trying",
    "Tomorrow is now","Change the world by being yourself","The simplest things are often the truest","Either you run the day or the day runs you","Whatever you do, do it well",
    "It hurt because it mattered","Turn your wounds into wisdom","The only way to do great work is to love what you do." ,
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "Believe you can and you're halfway there.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Life is what happens when you're busy making other plans.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Strive not to be a success, but rather to be of value.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "The best way to predict the future is to create it."



    
];








const generateBtn = document.getElementById("quoteGenerateBtn");
const quotes = document.querySelector(".quote");

// generate random number
generateRandomNumber = () => {
    return Math.floor(Math.random()*quote.length);
}

//generate random color
generateBtn.addEventListener("click" , () => {
    quotes.textContent = quote[generateRandomNumber()];
})