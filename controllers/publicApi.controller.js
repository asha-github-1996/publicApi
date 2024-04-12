const axios = require("axios");

const publicApi = async (req, res) => {
  try {
    const { category, amount } = req.query;

    let url = "https://v2.jokeapi.dev/joke/Development";

    if (category) {
      url += `?category=${category}`;
    }
    if (amount) {
      url += `${category ? "&" : "?"}amount=${amount}`;
    }

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = publicApi;
