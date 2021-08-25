const  express = require("express");
const router = express.Router();
const Physio = require('../models/physio');


//helper function to get by id's
async function getPhysio(req, res, next) {
  let physio;
  try {
    physio = await Physio.findById(req.params.id);
    console.log(physio);
    if (physio == null) {
      return res.status(404).json({ message: "Client does not exist" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.physio = physio;
  next();
}

//retrieves all physios
router.get("/", async(req,res) => {
    try{
      const physio = await Physio.find();
      res.json(physio);
    } catch(err){
      res.status(500);
    }
});

//retrieves physio by id
router.get("/:id", getPhysio, async (req,res) => {
    res.send(res.physio);
});

router.post("/", async (req,res) => {
  console.log(JSON.stringify(req.body))
    const physio = new Physio({
        title: req.body.title,
        fname: req.body.fname,
        lname: req.body.lname,
        mobile: req.body.mobile,
        phone: req.body.phone,
        email: req.body.email,
        address:
          {
            add_line_1: req.body.address.add_line_1,
            add_line_2: req.body.address.add_line_2,
            town: req.body.address.town,
            county_city: req.body.address.county_city,
            eircode: req.body.address.eircode,
          },
    });

    try {
        const newPhysio = await physio.save();
        res.status(201).json(newPhysio);
      } catch (err) {
        res.status(400);
      }
});

//insert for react post on the client side because above post would not work due to . notation for embedded array
router.post("/insert", async (req,res) => {
  console.log(JSON.stringify(req.body, null, 2))
    const physio = new Physio({
        title: req.body.title,
        fname: req.body.fname,
        lname: req.body.lname,
        mobile: req.body.mobile,
        phone: req.body.phone,
        email: req.body.email,
        address:
          {
            add_line_1: req.body.add_line_1,
            add_line_2: req.body.add_line_2,
            town: req.body.town,
            county_city: req.body.county_city,
            eircode: req.body.eircode,
          },
    });

    try {
        const newPhysio = await physio.save();
        res.status(201).json(newPhysio);
      } catch (err) {
        res.status(400);
      }
});


//updates the fields that contain changes
router.patch("/:id", getPhysio, async (req,res) => {
  
    //update personal details/contact if not null
    if (req.body.title != null) {
      res.physio.title = req.body.title;
    }
    if (req.body.fname != null) {
      res.physio.fname = req.body.fname;
    }
    if (req.body.lname != null) {
      res.physio.lname = req.body.lname;
    }
    if (req.body.mobile != null) {
      res.physio.mobile = req.body.mobile;
    }
    if (req.body.phone != null) {
      res.physio.phone = req.body.phone;
    }
    if (req.body.email != null) {
      res.physio.email = req.body.email;
    }
    //update address section if not null
    if (req.body.address.add_line_1 != null) {
      res.physio.address.add_line_1 = req.body.address.add_line_1;
    }
    if (req.body.address.add_line_2 != null) {
      res.physio.address.add_line_2 = req.body.address.add_line_2;
    }
    if (req.body.address.town != null) {
      res.physio.address.town = req.body.address.town;
    }
    if (req.body.address.county_city != null) {
      res.physio.address.county_city = req.body.address.county_city;
    }
    if (req.body.address.eircode != null) {
      res.physio.address.eircode = req.body.address.eircode;
    }

    try{
      const updatePhysio = await res.physio.save();
      res.json(updatePhysio);
  } catch (err) {
        res.status(400).json({message: err.message});
  }
});


//deletes physio doc by id
router.delete("/:id", getPhysio, async (req,res) => {
    try{
      await res.physio.remove();
      res.json({message: "Deleted"});
    } catch(err) {
      res.status(500).json({message: err.message});
    }
});

module.exports = router;