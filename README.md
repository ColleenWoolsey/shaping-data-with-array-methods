BOOK FOUR - CHAPTER 4 - SHAPING DATA WITH ARRAY METHODS
(find forEach map filter reduce)

Copy the code below into the JavaScript file, and follow the instructions in the comments.

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

1. Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.

2. Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

3. Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

4. Use the reduce method to create a sentence from the words in the following array     const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

MORE PRACTICE: SPAM
Learning Objective:
1. Accessing data within an array of objects
2. Build a list of email addresses of all the customer's contacts
3. From the customers array that contains the emails we need to retrieve extract just the customers' contact email addresses and store them in a new array