const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
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
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
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
    hasMovieAdaptation: true,
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

// data destructuring
/* 
const books = getBooks();
books;

const book = getBook(3);

/* const author = book.author;
const title = book.title; */
/*
const { title, author, genres, hasMovieAdaptation, pages, publicationDate } =
  book;
*/
/* const primaryGenre = genres[0];
const secondaryGenre = genres[1]; */
/*
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

primaryGenre;
secondaryGenre;
otherGenres;
console.log(title, author, primaryGenre, secondaryGenre);

// create a new genre and add it to the end of previous genre array

const newGenre = [...genres, "Epic Fantasy"];
newGenre;

//
const updatedBook = {
  //spread the array
  ...book,

  //add new property
  moviePublicationDate: "2001-12-19",

  //overwritting an existing property
  pages: 1210,
};

updatedBook;

// template literals

const summary = `${title}, is a book written by: ${author}. It is ${pages} pages long and was published in ${
  publicationDate.split("-")[0]
} `;
summary;

// terniary operators

const pagesRange =
  pages > 1000
    ? "book has over a thousand pages"
    : "book has under 1000 pages ";
pagesRange;

//   ARROW FUNCTION REVIEW  //
// ----------------------- //

//regular function
function getYear(str) {
  return str.split("-")[0];
}

// SYNTAX IS: argument, arrow and what we want to return

const pubDate = (str) => str.split("-")[0];

console.log(getYear(publicationDate)); // using regular function
console.log(pubDate(publicationDate)); // using arrow function

// for example sake here's a multiple line arrow function:

const pubDate2 = (str) => {
  //rest of code would go here
  return str.split("-")[0];
};
// END MULTIPLE LINE ARROW FUNC EXAMPLE //

//------------------ Section END --------------------//

// ONTO LOGICAL OPERATORS AND SHOR CIRCUTING
console.log(true && "some string");
console.log(false && "some other string");
console.log(hasMovieAdaptation && "This book has movie adaptation");

// -------- Optional Chaining -------- //

function getReviewTotal(book) {
  const goodread = book.reviews.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;

  return goodread + librarything;
}

console.log(getReviewTotal(book)); */
/*
// --------- ARRAY METHODS ------- //
const books = getBooks();
books;

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => {
  // return an instance of the book object
  return {
    title: book.title,
    author: book.author,
    genre: book.genres,
  };
});

essentialData;

//----------- array filter method -----------//
const longBooks = books
  .filter((book) => book.pages > 500) // filter once
  .filter((book) => book.hasMovieAdaptation); // filter once again to filter obj further, is possible to filter a third time
longBooks;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);

adventureBooks;

// ------- Array Reduce Method -------- //
// most commonly used for mathematical operations

const pageAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pageAllBooks;

/* const pageAllBooks: This declares a constant variable named pageAllBooks that will store the result of the reduction operation.
books: This is an array of objects representing books. We assume that it is defined elsewhere in the code.
.reduce(): This is an array method used to reduce an array to a single value.
 It iterates over each element of the array and applies a function to accumulate a final result.
(acc, book) => acc + book.pages: This is the callback function provided to the reduce() method.
 It takes two parameters: acc (short for "accumulator") and book (each element of the books array).
acc: This represents the accumulated value that is being calculated as the reduction progresses. 
In this case, it will accumulate the total number of pages.
book: This represents the current element being processed from the books array.
acc + book.pages: This expression adds the number of pages (book.pages) to the accumulator (acc).
 It accumulates the total number of pages as the reduction progresses.
0: This is the initial value of the accumulator (acc. In this case, it is set to 0, meaning the reduction starts with a total of 0 pages.
So, the reduce() method is used to iterate over each book in the books array, adding up the number of pages (book.pages) to the accumulator (acc).
 The result is stored in the pageAllBooks variable, representing the total number of pages in all the books in the books array.
*/

/*
// ------- Array Sort Method ------ //

const arr = [6, 3, 7, 8, 2, 5, 1];
const sorted = arr.slice().sort((a, b) => a - b);
//we add the slice so this way we are creating a new array as a copy of the original one instead of perfroming the operation on it.
sorted;
arr;

const sortedByPage = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPage;

// -------- Working with Immutable Arrays --------- //

//1) Add a new book object
const newBook = {
  id: 6,
  tile: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdding = [...books, newBook]; //add new obj to array using the spreading operator

books;
booksAfterAdding;

// 2) Delete book from array:
const booksAfterRemove = booksAfterAdding.filter((book) => book.id !== 3); // basically create a new array where you filter out all books where id = 3
booksAfterRemove;

// 3) Update object in the array
const bookAfterUpdate = booksAfterRemove.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);

bookAfterUpdate;
*/

// ----- ASYNCRONOUS PROGRAMMING ----//
/* 
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));
 */

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getData();
