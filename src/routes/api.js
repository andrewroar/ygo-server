const express = require("express");
const axios = require("axios");

const db = require("../models");

const GOOGLE_URL = "https://www.googleapis.com/books/v1/volumes";

const apiRouter = express.Router();

//API

const transformGoogleBooks = (googleBooks = []) => {
  return googleBooks.map((googleBook) => {
    return {
      title: googleBook.volumeInfo.title,
      subTitle: googleBook.volumeInfo.subTitle,
      description: googleBook.volumeInfo.description,
      authors: googleBook.volumeInfo.authors,
      image: googleBook.volumeInfo.imageLinks.thumbnail,
      link: googleBook.volumeInfo.previewLink,
    };
  });
};

const getBooksFromGoogle = async (req, res) => {
  try {
    const { searchTerm } = req.body;

    const { data } = await axios.get(GOOGLE_URL, { params: { q: searchTerm } });

    const books = transformGoogleBooks(data.items);

    res.json({
      results: books,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const saveBookInDb = async (req, res) => {
  try {
    const payload = req.body;

    await db.Book.create(payload);

    res.json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const removeBookInDb = async (req, res) => {
  try {
    const { id } = req.params;

    await db.Book.findByIdAndDelete(id);

    res.json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const getAllSavedBooks = async (_, res) => {
  try {
    const books = await db.Book.find({});

    res.json({
      results: books,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

apiRouter.post("/books", getBooksFromGoogle);
apiRouter.get("/save", getAllSavedBooks);
apiRouter.post("/save", saveBookInDb);
apiRouter.delete("/books/:id", removeBookInDb);

//////////////////////////////

const getAllCustomCards = async (_, res) => {
  try {
    const customcards = await db.CustomCards.find({});

    res.json({
      results: customcards,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const getOneCustomCards = async (_, res) => {
  const { id } = req.params;
  try {
    const customcards = await db.CustomCards.findById(id);

    res.json({
      results: customcards,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const AddCustomCards = async (req, res) => {
  try {
    const payload = req.body;

    await db.CustomCards.create(payload);

    res.json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const VoteCard = async (req, res) => {
  try {
    const { id } = req.params;
    const { vote } = req.body;

    await db.CustomCards.findOneAndUpdate({ _id: id }, { vote: vote });

    res.json({
      success: true,
    });
  } catch (error) {
    res.status(200);
  }
};

const removeCard = async (req, res) => {
  try {
    const { id } = req.params;

    await db.CustomCards.findByIdAndDelete(id);

    res.json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

apiRouter.get("/customcards", getAllCustomCards);
apiRouter.get("/customcards/:id", getOneCustomCards);
apiRouter.post("/customcards", AddCustomCards);
apiRouter.delete("/customcards/:id", removeCard);
apiRouter.put("/customcards/vote/:id", VoteCard);

module.exports = apiRouter;
