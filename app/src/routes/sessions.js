const  express = require("express");
const router = express.Router();
const Session = require('../models/session');
const Client = require('../models/client');
const Physio = require("../models/physio");

//helper function to get by id's
async function getSession(req, res, next) {
    let session;
    try {
      session = await Session.findById(req.params.id);
      console.log(session);
      if (session == null) {
        return res.status(404).json({ message: "Session does not exist" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.session = session;
    next();
  }

router.get("/", async(req,res) => {
    try{
        const sessions = await Session.find();
        res.json(sessions);
    } catch(err){
        res.status(500);
    }
});

router.get("/:id", getSession, async (req,res) => {
    res.send(res.session);
});

//no ebedded arrays so we try with the original backend post
router.post("/", async (req,res) => {
    console.log(req.body);
    const session = new Session({
        date: req.body.date,
        time: req.body.time,
        client_id: req.body.client_id,
        physio_id: req.body.physio_id,
        fee: req.body.fee,
        number: req.body.number,
        duration: req.body.duration,
        type: req.body.type,
        other: req.body.other
    });

    try {

        let client = await Client.findById(session.client_id);
        let physio = await Physio.findById(session.physio_id);

        if(client != null && physio != null) {
            const newSession = await session.save();
            res.status(201).json(newSession);
        }
      } catch (err) {
        res.status(400);
      }
});

router.patch("/:id", getSession, async (req,res) => {

    if(req.body.date != null){
        res.session.date = req.body.date;
    }
    if(req.body.time != null){
        res.session.time = req.body.time;
    }
    if(req.body.client_id != null){
        res.session.client_id = req.body.client_id;
    }
    if(req.body.physio_id != null){
        res.session.physio_id = req.body.physio_id;
    }
    if(req.body.fee != null){
        res.session.fee = req.body.fee;
    }
    if(req.body.number != null){
        res.session.number = req.body.number;
    }
    if(req.body.duration != null){
        res.session.duration = req.body.duration;    
    }
    if(req.body.type != null){
        res.session.type = req.body.type;
    }
    if(req.body.other != null){
        res.session.other = req.body.other;
    }

    try{
        const updateSession = await res.session.save();
        res.json(updateSession);
    } catch (err) {
          res.status(400).json({message: err.message});
    }
    
});

router.delete("/:id", getSession, async(req, res) => {
    try {
        await res.session.remove();
        res.json({ message: "Deleted" });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
});

module.exports = router;