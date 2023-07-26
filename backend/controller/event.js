// Import Event List Data from Model
const eventList = require('../model/Event')
// Export our controller functions for our router to use
module.exports = {
    getEventList,
    createEvent,
    searchEvent
}

// Listing Events
function getEventList(request, response) {
    // Return all events in JSON format
    response.json(eventList)
}
// Creating Events
function createEvent(request, response) {
    // Assume that the frontend attaches form data to the HTTP request that we can use to create a new event
    try {
        const newEvent = request.body // body property is where the form data will be on the HTTP request
        eventList.push(newEvent)
        response.status(200).json({message: 'Successfully created event !'})
    } catch (err) {
        response.status(400).json({message: err})
    }
}
// Filter/Search Events
function searchEvent(request, response){
    const searchParam = request.params.searchParam
    const filteredEventList = eventList.filter(event => event.name == searchParam) // filter our event array based on the search param keyword
    response.json(filteredEventList)
}