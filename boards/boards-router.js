const router = require('express').Router();

const Boards = require('./boards-model.js')

router.post('/', (req,res) => {
    Boards
    .insert(req.body)
    .then(ids => {
        // console.log(ids)
        if(ids.title === '' || ids.genre === ''){
            res.status(422).json({message:'please provide the title and the genre fields'})
        }
        else {
        res.status(201).json(ids);
        }
    })
    .catch(error => {
        res.status(500).json(error);
    }

    )
})

module.exports = router