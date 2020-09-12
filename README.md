# Google Books Server

## Tickets

### GB-1 - Create the backend boilerplate

#### Description

We're going to need some code in place to scaffold the rest of the api.

#### ACs

- Use our templates in Slack for Mongooose and Express
- Create a rudimentary folder structure
- This should be in a separate repo

---

### GB-2 - Seed the data in the mongo database

#### Description

We should have some rudimentary data available that is in the correct book format so that we can develop our endpoints against it.

#### ACs

- Create a seed command in the `package.json` that we can use such as `npm run seed`
- Create a `seed.js` file inside of a `seed/` folder that will connect to the mongoose database and add the relevant books.
- Create a `Book.js` file with a mongoose `Book` model that will allow us to run Mongoose CRUD operations on the `Book` collection.

### GB-3 - Add a get route

#### Description

We need the ability to get a list of books from our endpoint by calling a `/books` endpoint on our app.

#### ACs

- Create a `/books` endpoint on the api.
- This should return the collection of the books from the `Book.js` model we created in mongoose.
- Use this as an opportunity to create a structure / schema for your response such as `{ results: [] }`
