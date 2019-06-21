const supertest = require('supertest')

const server = require('../api/server.js')
const db = require('../data/dbConfig.js')

describe('student router', () => {
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
})