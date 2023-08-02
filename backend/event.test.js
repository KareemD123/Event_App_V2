
const eventList = require('./model/Event')
const app = require('./server')
const supertest = require('supertest')
const request = supertest(app)

// getEventList
test('Return event list JSON', async () => {
    const response = await request.get('/events')
    expect(response.status).toBe(200)
    expect(response.body[0].name).toBe(eventList[0].name)
})

// searchEvent
test('Search events', async () => {
    const response = await request.get('/search/Picnic')
    const filteredEvent = eventList.filter(e => e.name == 'Picnic')
    expect(response.status).toBe(200)
    expect(response.body[0].name).toBe(filteredEvent[0].name)
})

//createEvent
test('Create Event', async () => {
    const eventBody = {
        name: '123',
        host: '123',
        date: new Date(),
        location: 'beach'
    }
    const response = await request.post('/createEvent').send(eventBody)
    const newEvent = await request.get('/search/123')
    expect(response.status).toBe(200)
    expect(newEvent.body[0].name).toBe(eventBody.name)
})