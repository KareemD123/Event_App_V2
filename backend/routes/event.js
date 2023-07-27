const express = require('express')

const router = express.Router()

// We can import our own files as modules as well
const eventController = require('../controller/event')

router.get('/events', eventController.getEventList)

router.post('/createEvent', eventController.createEvent)

router.get('/search/:searchParam', eventController.searchEvent)

module.exports = router;


