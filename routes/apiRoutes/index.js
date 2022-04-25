const router = require('express').Router()
const dbStore = require ('../../public/data/store')



//Adding the functions to get the notes in html then post the notes 
router.get('/public/notes.html', (req, res) => {
    dbStore
    getNotes() 
    .then(notes => {res.json(notes)})
    .catch(err => {
        res.status(`Service Error `).json(err)
    })
});

// need a method add note request from the body and another .then and .catch statement.
router.post ('/public/notes.html,', (req,res) => {

    dbStore
    .addNote(req.body)
    .then(note => {
        res.json(note)
    })
    .catch(err => {
        res.status(`Service Error`).json(err)
    })
    
})
//create a router delete statement and params id. you will need a remove note there and you need  to store in your function 
router.delete(`/public/notes/:id`,(req, res) => {
  dbStore 
  .removeNote(req.params.id)
  .then(() => res.json({ ok: true }))
  .catch(err => res.status(`Serivce Error`).json(err))

}) 


module.exports = router;