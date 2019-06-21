const router = require('express').Router();

const Boards = require('./boards-model.js')

router.get('/', (req,res) => {
    // console.log(req.body)
    Boards.getGames()
    .then(board => {
        // console.log('all games ',board)
        res.status(200).json({board:board});
    })
    .catch(error => {
        res.status(500).json(error);
    }

    )
})

router.get('/:id', (req,res) => {
    Boards.getGamesById(req.params.id)
    .then(board => {
        if(board)
        {
            res.status(200).json(board);
        }
        else {
            res.status(404).json({message:'Board id not found'});
        }
    })
    .catch(error => {
        res.status(500).json(error);
    }

    )
})

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

router.delete('/:id', (req,res) => {
    
    Boards
    .remove(req.params.id)
    .then(count => {
        // console.log('count ',count)
        if(count>0)
        {
            res.status(201).json(count);
        }
        else{
            res.status(404).json({message:'zoo id not found'});
        }
    })
    .catch(error => {
        // console.log('update error ',error)
        res.status(500).json(error);
    }

    )
})

module.exports = router