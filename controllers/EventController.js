const Event = require("../models/Event");

const db = require("../db/conn");

module.exports = class EventController {
    static async showEvents(req, res) {
        res.render("home");
    }

    static createEvent(req, res) {
        res.render("createEvent");
    }
/*
    static createEventPost (req, res) {
        
    }

    static async getEvent (req, res) {
        
    }


    static async editEvent (req, res) {
        
    }

    static async removeEvent (req, res) {
        
    }

    static async updateEventPost (req, res) { 
        
        
    }*/
};
