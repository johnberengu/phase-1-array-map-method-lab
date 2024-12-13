const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
const titleCased = () => {
  // Use map to iterate over each tutorial in the array
  return tutorials.map(tutorial => {
    // Split each tutorial into an array of words, capitalize each word, and rejoin the words
    return tutorial
      .split(" ") // Split the string into individual words
      .map(word => 
        word.charAt(0).toUpperCase() + word.slice(1) // Capitalize the first letter of each word
      )
      .join(" "); // Join the words back into a single string
  });
};

// Example usage: Log the output of the titleCased function
console.log(titleCased());

