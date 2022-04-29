const express = require("express");
const Resource = require("./model");
const router = express.Router();


router.get('/', (req, res, next) => {
  Resource.getResource()
    .then(resrce => {
      return res.json(resrce)
    })
    .catch(next)
})


router.post('/', (req, res, next) => {
  Resource.postResource(req.body)
  .then(resrce => {
    console.log(resrce)
    res.json(resrce)
  })
  .catch(next)
})


router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "It aint working man",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;