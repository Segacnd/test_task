const data = require("../data/clientData");

class DataController {
  getAllData(req, res) {
    res.send(data);
  }
}

module.exports = new DataController();
