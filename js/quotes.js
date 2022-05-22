const quotes = [
	{
		quote:
			"You will face many defeats in life, but never let yourself be defeated.",
		author: "Maya Angelou",
	},
	{
		quote:
			"The greatest glory in living lies not in never falling, but in rising every time we fall.",
		author: "Nelson Mandela",
	},
	{
		quote: "Never let the fear of striking out keep you from playing the game.",
		author: "Babe Ruth",
	},
	{
		quote:
			"Life is never fair, and perhaps it is a good thing for most of us that it is not.",
		author: "Oscar Wilde",
	},
	{
		quote: "May you live all the days of your life.",
		author: "Jonathan Swift",
	},
	{
		quote:
			"Your time is limited, so don't waste it living someone else's life.",
		author: "Steve Jobs",
	},
	{
		quote:
			"Success is not final; failure is not fatal: It is the courage to continue that counts.",
		author: "Churchill",
	},
	{
		quote:
			"Success usually comes to those who are too busy to be looking for it. ",
		author: "Henry David Thoreau",
	},
	{
		quote: "The way to get started is to quit talking and begin doing.",
		author: "Walt Disney",
	},
	{
		quote: "The secret of success is to do the common thing uncommonly well. ",
		author: "John D. Rockefeller Jr.",
	},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
