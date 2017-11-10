var express = require('express');
var router = express.Router();
var ToDos = require('../models/todos.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  ToDos.find({},(err, todos) => {
    if(err){
      return next(err);
    }
    return res.json({payload: todos});
  })
});

router.post('/', function(req, res, next) {
  const todo = new ToDos(req.body);
  todo.save((err,entry) => {
    if(err){
      return next(err);
    }
    return res.json({payload: entry});
  })
});

router.patch('/',(req,res,next) => {
  ToDos.findOneAndUpdate({_id: req.body._id}, {$set:{complete:req.body.complete}},{new:true}, (err, doc) => {
    console.log(doc);
    if(err){
      return next(err);
    }
    return res.json({payload: doc})
  } )
})

router.delete('/',(req,res,next) =>{
  ToDos.findOneAndRemove({_id: req.body._id}, (err, doc) => {
    if(err){
      return next(err);
    }
    res.end()
  })
})


module.exports = router;
