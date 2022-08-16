const express = require("express");

const getMovies = function (req, res) {
  res.send("Get movies");
};

const postMovies = function (req, res) {
  res.send("Post movies");
};

const putMovies = function (req, res) {
  res.send("Put movies");
};

const patchMovies = function (req, res) {
  res.send("Patch movies");
};

const delMovies = function (req, res) {
  res.send("Del movies");
};

module.exports = {
  getMovies,
  postMovies,
  putMovies,
  patchMovies,
  delMovies,
};
