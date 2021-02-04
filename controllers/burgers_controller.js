const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            burgerInfo: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured],
        (result) => {
            res.json({ id: result.insertId });  // Send back the ID of the new quote
        });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;
    console.log("condition", condition);
    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,
        (result) => {
            if (result.changedRows === 0) {
                return res.status(404).end(); // If no rows changed: the ID must not exist, so 404
            }
            res.status(200).end(); // When successful so 200
        }
    );
});

// Export routes for server.js to use.
module.exports = router;