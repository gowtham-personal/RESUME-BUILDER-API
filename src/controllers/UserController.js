const db = require("../models/index");

//get all the users
exports.getUsers = async function (req, res) {
  try {
    let userId = req.params.id;
    let data = await db.users.findOne({
      where: {
        id: userId,
      },
    });
    let response = data != null ? data : "No data found";
    return res.send({
      status: "success",
      code: 200,
      response,
    });
  } catch (ex) {
    return res.send(ex);
  }
};

// Display detail page for a specific user.
exports.getUserDetails = function (req, res) {
  res.send("NOT IMPLEMENTED: user detail: " + req.params.id);
};
