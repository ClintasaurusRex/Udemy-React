const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: ["fantasy", "high-fantasy", "adventure", "fiction", "novels", "literature"],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: ["science fiction", "humor", "speculative fiction", "short stories", "fantasy"],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];
function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring Objects and Arrays

/*

const book = getBook(3);
book;

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;

console.log(author, title);

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres; // ...Spread Operator

console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = [...genres, "epic fantasy"]; // Spread Operator
newGenres;

const updatedBook = {
  ...book,
  // Adding a new property to the object
  moviePublicationDate: "2001-12-19",

  // Overwriting an existing property
  // pages: 1210,
}; // Spread Operator
updatedBook;

// function getYear(str) {
//   return str.split("-")[0];
// }

// const getYear = (str, a, b) => str.split("-")[0]; // Arrow function for oneliners
const getYear = (str) => str.split("-")[0]; //
console.log(getYear(publicationDate));

const summary = `${title}, a ${pages}-- long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

// Ternary Operator

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;
console.log(`The book ${title} has ${pagesRange} pages`);

console.log(true && "Some string");
// Short circuiting works when the first value is false, Then the short circuit value wont return the value on the right
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");
// if the value on the left is true then it will return the value on the right

// falsy: 0, '', null, undefined
console.log("clint" && "Some string");
console.log(0 && "Some string");

console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "No Data";
// countWrong;

// // Nullish Colesing operator
// const count = book.reviews.librarything.reviewsCount ?? "No Data";
// count;

//If reviewsCount is null or undefined, it returns the right-hand value (0)
// Unlike the OR operator (||), it only falls back when the value is null/undefined
// It preserves other falsy values like 0 or empty strings

// Optional Chaining Operator-----------------------------------------------
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;

  // Checking if goodreads exists before trying to access reviewsCount
  // If goodreads doesn't exist, it returns undefined instead of throwing an error
  // Combined with the nullish coalescing operator (??) in the librarything line, it provides a fallback value of 0 if the property doesn't exist

  return goodreads + librarything;
}
console.log(getTotalReviewCount(book));
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

// Map Method -----------------------------------------------------------------------------------------------------

// Creates a new array without modifying the original
// Transforms each element using the provided callback function
// Returns an array of the same length as the original
// Can transform data into any desired format (numbers, strings, objects)
/*000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

const books = getBooks();
books;

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  // Use the paratheseis first to return an object like this example
  title: book.title,
  author: book.author,
  review: getTotalReviewCount(book),
}));

essentialData;

// Filter Method - used to filter based on a condition

// The Filter method is used to create a new array containing only the elements that satisfy a specified condition. It evaluates each element against a test condition and returns a new array with only the elements that pass the test (return true). The original array remains unchanged.

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// Reduce Method: ------------------------------------------------------------------------------------------------------
// The reduce method is a powerful array method that processes each element of an array to create a single output value. It "reduces" an array down to one value by applying a function to each element sequentially.

// Takes a callback function with an accumulator and current element
// The accumulator stores the running result
// Second argument (0 in example) is the initial value of accumulator
// Perfect for calculations like sums, averages, or combining data

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

// Array Sorting -----------------------------------------------------------------------------------------------------------
// Sort () mutates the original array and thats bad so use the slice method first to make a copy of the original array

const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

// Working with Immutable arrays ---------------------------------------------------------------------------------

// 1) Add a book object to array

const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) Delete a book object from the array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Update a book object while in the array ---------------------------------------------------------------------

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;
*/

// Async and Promises------------------------------------------------------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("Clint");
