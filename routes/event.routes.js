const express = require('express');
const router = express.Router();

const EventController = require('../controllers/EventController')

//router.get('/:id', EventController.getEvent)
//router.post('/remove/:id', EventController.removeEvent)
//router.get('/edit/:id', EventController.editEvent)
//router.post('/edit', EventController.updateEventPost)
router.get('/', EventController.showEvents)
//router.post('/create', EventController.createEventPost)
router.get('/create/form', EventController.createEvent)


module.exports = router;