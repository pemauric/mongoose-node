const Event = require("../models/Event");

const db = require("../db/conn");

module.exports = class EventController {
    static async showEvents(req, res) {
        
        const event = await Event.find().lean();

        console.log('Created event: ' + event);
        
        res.render("home", { event });
    }

    static createEvent(req, res) {
        res.render("createEvent");
    }

    static async createEventPost (req, res) {
        const event = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image
        }
        
        const eventData = new Event(event)

        console.log('Created event: ' + eventData);

        await eventData.save();
        
        res.redirect("/");
    }

    static async getEvent (req, res) {
        const id = req.params.id
        
        const event = await Event.findById(id).lean();

        res.render("viewEvent", { event })
    
    }


    static async editEvent (req, res) {
        const id = req.params.id

        const event = await Event.findById(id).lean();

        res.render('editEvent', { event })
    }

    static async removeEvent (req, res) {
        const id = req.params.id

        await Event.deleteOne({_id: id})
        
        console.log("Removed Event:", id)

        res.redirect("/");
    }

    static async updateEventPost (req, res) { 
        const id = req.body.id

        const event = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image
        }

        console.log(event)

        await Event.updateOne({_id: id }, event)
        
        res.redirect('/')
    }
};
