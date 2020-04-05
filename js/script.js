/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
const quotes = [
{
  quote: `Difficulties break some men but make others.
          No axe is sharp enough to cut the soul of a sinner who keeps on trying,
          one armed with the hope that he will rise even in the end`,
  scource:`Nelson Mandela`,
  citation: `From a letter to Winnie Mandela writen on Robben Island`,
  year: `1975`
},
{
  quote: `Knowing where you come from is no less important than knowing where
          your are going`,
  scource:`Neil deGrasse Tyson`,
  citation: `'In the Beginning', published in Natural History Magazine`,
  year: `September 2003`,
},
{
  quote: `Treatment without prevention is simpy unsustainable`,
  scource:`Bill Gates`,
  citation: ``,
  year: ``
},
{
  quote: `Stumbling is not falling`,
  s:`Malcolm X`,
  citation: ``,
  year: ``
},
{
  quote: `A man who dares waste one hour of time has not discovered the value of life`,
  scource:`Charles Darwin`,
  citation: `The Life and Letters of Charles Darwin`,
  year: `1897`
}
];
let message = [];

for (let i = 0; i < quotes.length; i += 1){
  message += `${quotes[i].quote}
  ${quotes[i].scource}`;
}

console.log(message);


/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
