const router = require('express').Router()
const res = require('express/lib/response')
const {indexApiRoutes, filterByQuery} = require('../apiRoutes/index')
const {indexHtmlRoutes} = require('../htmlRoutes/index')

//Adding the functions to get the notes in html then post the notes 
router.get('/public/notes.html', (req, res) => {
    getNotes() 
    .then(notes => {res.json(notes)})
    .catch(err => {
        res.status(`Service Error `)
    })
});
router.post ('/public/notes.html,', (req,res) => {
    console.log(req.body)
    .addNote(req.body)
    .then(note => {
        res.json(note)
    })
    .catch(err => {
        res.status(`Service Error`)
    })
})


module.exports = router;