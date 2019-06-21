const db = require('../data/dbConfig.js')

module.exports = {
    insert,
    remove,
    getGames,
}

function insert(game){
    return db('boards')
    .insert(game,'id')
    .then(ids => {
        return db('boards')
        .where({id:ids[0]})
        .first();
    })
}

function remove(id){
    return db('boards')
    .where({id})
    .del()
}

function getGames(){
    return db('boards')
}