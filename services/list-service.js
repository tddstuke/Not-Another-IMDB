const axios = require("axios");

module.exports = async function createInitialList(user_id) {
  try {
    const response = await axios.post("/api/list", {
      name: "My Movies",
      user_id: user_id,
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
