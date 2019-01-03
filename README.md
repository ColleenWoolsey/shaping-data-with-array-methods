BOOK FOUR - CHAPTER 4 - SHAPING DATA WITH ARRAY METHODS
(find forEach map filter reduce)

https://github.com/nashville-software-school/client-side-mastery/blob/cohort-30/book-3-the-initiate/chapters/JS_ARRAY_METHODS.md

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

MORE PRACTICE: DOTARD AND SIMBLETON
1. Use forEach() to see all the customers and their adddress
2. Use filter() to see businesses in NY
3. Use filter() to see businesses in manufacturing industry
4. Use map() to create an array of purchasing agents
5. Add the company and telephone number
6. Use find() to search for custoers - Create an input field and capture the key press event
7. Refactor to search for first name of purchasing agents
8. Refactor code to search first and last name for variable
9. Use reduce() to calculate order total

Lightning Exercise 1: Use the reduce method on the following array to determine how much total rain fell last month.
const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]
const totalRainfall = monthlyRainfall.reduce()

Lightning Exercise 2: Use the reduce method on the following array to build a sentence.
const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
const sentence = words.reduce()

PRACTICE: BIG SPENDERS
Use the filter method to get all the big spenders in the main array into a new one.