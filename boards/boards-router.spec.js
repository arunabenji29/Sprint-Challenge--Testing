const supertest = require('supertest')

const server = require('../api/server.js')
const db = require('../data/dbConfig.js')

describe('Games router', () => {
    beforeEach(async () => {
        await db('boards').truncate();
    });

    describe('POST /', () => {
        it('checks if res.body is not null', async () => {
            let game = { "title": 'Pacman1', "genre": "Arcade1", "releaseYear": 1981 }
            await supertest(server)
                .post('/games')
                .send(game)
                .then(res => {
                    expect(res.body).not.toBeNull()

                })

        })

        it('responds with 201 OK', async () => {
            let game = { "title": 'Pacman2', "genre": "Arcade2", "releaseYear": 1982 }
            await supertest(server)
                .post('/games')
                .send(game)
                .expect(201)


        })

        it('responds with 422 OK', async () => {
            let game = { "title": '', "genre": "Arcade3", "releaseYear": 1983 }
            await supertest(server)
                .post('/games')
                .send(game)
                .expect(422)


        })

        it('checking the content type to be json', async () => {
            let game = { "title": 'Pacman4', "genre": "Arcade4", "releaseYear": 1984 }

            await supertest(server)
                .post('/games')
                .send(game)
                .expect('Content-Type', /json/i)
        })
    })

    describe('GET /', () => {
        

        it('check for an empty array', async () => {
            const res = await supertest(server)
                .get('/games')
            expect(res.body.board).toEqual([])
        })

        it('checking the content type to be json', async () => {
            let game = { "title": 'Pacman5', "genre": "Arcade5", "releaseYear": 1985 }
            await supertest(server)
                .post('/games')
                .send(game)
            await supertest(server)
                .get('/games')
                .expect('Content-Type', /json/i)
        })

        it('responds with 200 OK', async () => {
            let game = { "title": 'Pacman7', "genre": "Arcade7", "releaseYear": 1987 }
            await supertest(server)
                .post('/games')
                .send(game)
            await supertest(server)
                .get('/games')
                .expect(200)
        })
    })

    describe('GET by id/', () => {
        it('responds with 200 OK', async () => {
            let game = { "title": 'Pacman2', "genre": "Arcade2", "releaseYear": 1982 }
            await supertest(server)
                .post('/games')
                .send(game)
            await supertest(server)
                .get('/games/1')
                .expect(200)
        })

        it('responds with 404 OK', async () => {
            await supertest(server)
                .get('/games/1')
                .expect(404)
        })

    })


    describe('DELETE /', () =>{

        it('responds with 201 OK',async () => {
            let game = { "title": 'pacman6', "genre": "Arcade6", "releaseYear": 1986 }
            await supertest(server)
                .post('/games')
                .send(game)
            const res = await supertest(server)
            .get('/games')
            
            await supertest(server)
            .delete(`/games/${res.body.board[0].id}`)
            .expect(201)
        })
    
        it('see if the array is empty',async () => {
            let game = { "title": 'pacman6', "genre": "Arcade6", "releaseYear": 1986 }
            await supertest(server)
                .post('/games')
                .send(game)
            const res = await supertest(server)
            .get('/games')
            
            await supertest(server)
            .delete(`/games/${res.body.board[0].id}`)
            .then(res => {
                expect(res.body).not.toBeNull()

            })
        })

    it('responds with 404 OK',async () => {
    
        
        await supertest(server)
        .delete('/games/1')
        .expect(404)
    })
})
})