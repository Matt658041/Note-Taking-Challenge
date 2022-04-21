const router = require('express').Router()

const {indexApiRoutes, filterByQuery} = require('../apiRoutes/index')
const {indexHtmlRoutes} = require('../htmlRoutes/index')

//Adding the functions to get the notes in html then post the notes 
router.get('/public/notes.html', (req, res) => {
    store
    getNotes() 
    .then(notes => {res.json(notes)})
    .catch(err => {
        res.status(`Service Error `)
    })
});

// need a method add note request from the body and another .then and .catch statement.
router.post ('/public/notes.html,', (req,res) => {
    store
    req.body.id = filterByQuery.length.toString();

  if (!indexApiRoutes(req.body)) {
    res.status(400).send("The statement is not properly formatted.");
  } else {
    const notes = createNew(req.body, notes);
    res.json(notes);
  }
})
//create a router delete statement and params id. you will need a remove note there and you need store in your function 
router.delete() {
    store 
}



module.exports = router;