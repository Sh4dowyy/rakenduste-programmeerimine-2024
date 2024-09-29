const cats = [
    {
        "id": "17aaadb9-e22b-4783-a403-2683ea3da572",
        "name": "Meow",
        "createdAt": 1727099333746,
        "updatedAt": null,
        "deleted": false
    },
    {
        "id": "aa6a2f6b-19d8-4eb4-a349-1faddb780f70",
        "name": "Fluff",
        "createdAt": 1727099339820,
        "updatedAt": null,
        "deleted": false
    }
];

const crypto = require('crypto');

exports.create = (req, res) => {
    const { name } = req.body;

    if (!name || name === "") {
        return res
          .status(418)
          .send({ type: "Error", message: "Must include a name" });
      }

    const newCat = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        updatedAt: null,
        deleted: false,
    };

    cats.push(newCat);

    res.send(newCat);
};

exports.read = (req, res) => {
    res.send(cats)
};

exports.update = (req, res) => {
    const { id } = req.params;
};

exports.delete = (req, res) => {};