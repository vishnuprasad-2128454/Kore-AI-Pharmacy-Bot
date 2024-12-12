/**
 * Summary : Enterprise Service controller
 *
 * Description : Responsible to handle all sort of ESI enterprise service calls.
 *
 * @link   /Enterprise Apis/
 * @author ESI CA BOT Implementation
 */

const MODULE_NAME = "ESIEnterpriseServiceController";
const constants = require("../../constants/index");
const ESIEnterpriceService = require("../../service/ESIEnterpriseService");
const { logFn } = require("../../winston_config");

module.exports = {
  /**
   * Get the Id details for the given order / Member Id .
   * @param {*} req  request from route.
   * @param {*} res response to be send to the api
   * @returns the response data
   */
  async getIdDetails(req, res) {
    const FUNC_NAME = `getIdDetails`;
    let response;
    console.log("req.body",req.body)
    try {
      if (req.body.orderId && !req.body.memberId) {
        response = Object.create(constants.serverResponses.success);
        response.body = await ESIEnterpriceService.getOrderDetails(
          req.body.orderId
        );
      } else if (req.body.memberId) {
        response = Object.create(constants.serverResponses.success);
        response.body = await ESIEnterpriceService.getMemberDetails(
          req.body.memberId
        );
      }
    } catch (e) {
      logFn("error", __filename, `${MODULE_NAME} :: ${FUNC_NAME} :: `, e);
      if (e?.status === 404) {
        response = Object.create(constants.serverResponses.dataNotFound);
      } else {
        response = Object.create(constants.serverResponses.serverError);
      }
    }
    return res.status(response.status).send(response.body);
  },
};
