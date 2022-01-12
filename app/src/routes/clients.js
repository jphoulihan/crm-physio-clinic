const express = require("express");
const router = express.Router();
const Client = require("../models/client");

//helper function to get by id's
async function getClient(req, res, next) {
  let client;
  try {
    client = await Client.findById(req.params.id);
    console.log(client);
    if (client == null) {
      return res.status(404).json({ message: "Customer does not exist" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.client = client;
  next();
}

router.get("/", async (req, res) => {
  try{
      const clients = await Client.find();
      res.json(clients);
  } catch(err){
      res.status(500);
  }
});

router.get("/:id", getClient, (req, res) =>{
  res.send(res.client);
});

router.post("/", async (req, res) => {

  console.log(JSON.stringify(req.body,null,2));

  const client = new Client({
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
      }
  });

  try {
    const newClient = await client.save();
    res.status(201).json(newClient);
  } catch (err) {
    res.status(400);
  }

});


//seperate post for react insert becasue front end post of req.body didn't like the embedded array syntax
router.post("/insert", async (req, res) => {
  console.log(JSON.stringify(req.body,null,2));
  const client = new Client({
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
      }
  });

  try {
    const newClient = await client.save();
    res.status(201).json(newClient);
  } catch (err) {
    res.status(400);
  }

});

router.patch("/:id", getClient, async (req, res) => {
  //update personal details/contact if not null
  if (req.body.title != null) {
    res.client.title = req.body.title;
  }
  if (req.body.fname != null) {
    res.client.fname = req.body.fname;
  }
  if (req.body.lname != null) {
    res.client.lname = req.body.lname;
  }
  if (req.body.mobile != null) {
    res.client.mobile = req.body.mobile;
  }
  if (req.body.phone != null) {
    res.client.phone = req.body.phone;
  }
  if (req.body.email != null) {
    res.client.email = req.body.email;
  }
  //update address section if not null
  if (req.body.address.add_line_1 != null) {
    res.client.address.add_line_1 = req.body.address.add_line_1;
  }
  if (req.body.address.add_line_2 != null) {
    res.client.address.add_line_2 = req.body.address.add_line_2;
  }
  if (req.body.address.town != null) {
    res.client.address.town = req.body.address.town;
  }
  if (req.body.address.county_city != null) {
    res.client.address.county_city = req.body.address.county_city;
  }
  if (req.body.address.eircode != null) {
    res.client.address.eircode = req.body.address.eircode;
  }
  try{
      const updateClient = await res.client.save();
      res.json(updateClient);
      console.log("HELOO")
  } catch (err) {
        res.status(400).json({message: err.message});
  }
});

router.delete("/:id", getClient, async (req, res) => {
  try {
    await res.client.remove();
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
