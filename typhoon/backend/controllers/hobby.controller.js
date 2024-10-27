const hobbies = [
    {
        "id": "17aaadb9-e22b-4783-a403-2683ea3da573",
        "title": "Sport",
        "priority": 2,
        "createdAt": 1727099333741,
        "updatedAt": null,
        "deleted": false
    },
    {
        "id": "aa6a2f6b-19d8-4eb4-a349-1faddb780f70",
        "title": "IT",
        "priority": 1,
        "createdAt": 1727099339821,
        "updatedAt": null,
        "deleted": false
    }
];

const crypto = require('crypto');
const { generateToken, verifyToken } = require("../routes/jwt.routes.js")

exports.create = (req, res) => {
    const { title, priority } = req.body;

    if (!title || title === "") {
        return res
          .status(418)
          .send({ type: "Error", message: "Must include a name" });
      }

    const newHobby = {
        id: crypto.randomUUID(),
        title: title,
        priority: priority,
        createdAt: Date.now(),
        updatedAt: null,
        deleted: false,
    };

    hobbies.push(newHobby);

    res.send(newHobby);
};

exports.read = (req, res) => {
    const activeHobbies = hobbies.filter(hobby => !hobby.deleted);
    res.send(activeHobbies);
};

exports.update = (req, res) => {
    const { id } = req.params;
};

exports.delete = (req, res) => {
    const { id } = req.params;

    const hobby = hobbies.find(h => h.id === id);

    console.log("Deleting hobby with ID:", id);
    console.log("Found hobby:", hobby);

    hobby.deleted = true;
    res.send({ message: "Hobby marked as deleted", hobby });
};