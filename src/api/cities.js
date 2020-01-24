var express = require('express');
var Cities = require('../models/cities');

var router = express.Router();

router.get('/', function (req, res) {
  const knexInstance = req.app.get('db')

  Cities.retrieveAll(knexInstance)
    .then(cities => {
      res.json(cities);
    })
    .catch(err => res.json(err));
});





router.delete('/:city_id', function (req, res) {
  const knexInstance = req.app.get('db')
  const cityId = req.params.city_id

  Cities.delete(knexInstance, cityId)
    .then(cities => {
      res.sendStatus(200);
    })
    .catch(err => res.json(err));
})



router.post('/', function (req, res) {
  const knexInstance = req.app.get('db')
  const city = req.body.city;

  Cities.insert(knexInstance, city)
    .then(cities => {
      res.json(cities);
    })
    .catch(err => res.json(err));
});

module.exports = router;
