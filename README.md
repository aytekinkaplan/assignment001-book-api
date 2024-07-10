# Book API

This project provides an API for performing CRUD operations on books. It is built using Express.js and Sequelize, and uses SQLite as the database.

## Installation

Start by cloning the repository:

```bash
git clone https://github.com/aytekinkaplan/assignment001-book-api.git
cd assignment001-book-api
```

Install the required packages:

```bash
npm install
```

## Environment Variables

The project requires an `.env` file. Create an `.env` file in the project directory and add the following values:

```env
PORT=8000
SQLITE=./db.sqlite3
```

## Database Setup

First, create and synchronize the database using Sequelize:

```bash
npx sequelize-cli db:migrate
```

## Running the Server

Start the server with the following command:

```bash
npm start
```

The server will run on the port specified in the `.env` file (default is 8000).

## API Endpoints

### Create a Book

```http
POST /api/books
```

#### Request Body

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "9780743273565",
  "genre": "Fiction",
  "publicationYear": 1925,
  "image": "https://example.com/images/great-gatsby.jpg"
}
```

### Create Multiple Books

```http
POST /api/books/batch
```

#### Request Body

```json
[
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "isbn": "9780061120084",
    "genre": "Fiction",
    "publicationYear": 1960,
    "image": "https://example.com/images/to-kill-a-mockingbird.jpg"
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "isbn": "9780451524935",
    "genre": "Dystopian",
    "publicationYear": 1949,
    "image": "https://example.com/images/1984.jpg"
  },
  {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "isbn": "9780141439518",
    "genre": "Romance",
    "publicationYear": 1813,
    "image": "https://example.com/images/pride-and-prejudice.jpg"
  },
  {
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "isbn": "9780316769488",
    "genre": "Fiction",
    "publicationYear": 1951,
    "image": "https://example.com/images/catcher-in-the-rye.jpg"
  },
  {
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "isbn": "9780547928227",
    "genre": "Fantasy",
    "publicationYear": 1937,
    "image": "https://example.com/images/the-hobbit.jpg"
  },
  {
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "isbn": "9781451673319",
    "genre": "Dystopian",
    "publicationYear": 1953,
    "image": "https://example.com/images/fahrenheit-451.jpg"
  },
  {
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "isbn": "9780142437247",
    "genre": "Adventure",
    "publicationYear": 1851,
    "image": "https://example.com/images/moby-dick.jpg"
  },
  {
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "isbn": "9780199232765",
    "genre": "Historical Fiction",
    "publicationYear": 1869,
    "image": "https://example.com/images/war-and-peace.jpg"
  },
  {
    "title": "The Brothers Karamazov",
    "author": "Fyodor Dostoevsky",
    "isbn": "9780374528379",
    "genre": "Philosophical Fiction",
    "publicationYear": 1880,
    "image": "https://example.com/images/brothers-karamazov.jpg"
  },
  {
    "title": "Crime and Punishment",
    "author": "Fyodor Dostoevsky",
    "isbn": "9780143058144",
    "genre": "Philosophical Fiction",
    "publicationYear": 1866,
    "image": "https://example.com/images/crime-and-punishment.jpg"
  }
]
```

### Get All Books

```http
GET /api/books
```

### Get a Single Book

```http
GET /api/books/:id
```

### Update a Book

```http
PUT /api/books/:id
```

#### Request Body

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "9780743273565",
  "genre": "Fiction",
  "publicationYear": 1925,
  "image": "https://example.com/images/great-gatsby.jpg"
}
```

### Delete a Book

```http
DELETE /api/books/:id
```

## Error Handling

Middleware for error handling is included and will send a structured error response:

```json
{
  "error": true,
  "message": "Error message",
  "cause": "Error cause"
}
```

## License

This project is licensed under the ISC License.
