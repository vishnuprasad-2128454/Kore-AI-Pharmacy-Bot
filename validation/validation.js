const constants = require("../constants/botConstants");

module.exports = {
  async validateAPIkey(req, res,next) {
    const apiKey = req.headers["x-api-key"] || "";
    if (apiKey === process.env.ESI_WRAPPER_SERVICE_API_KEY) {
      return next();
    } else {
      response = Object.create(constants.serverResponses.unauthorized);
      return res.status(response.status).send(response.body);
    }
  },
};
