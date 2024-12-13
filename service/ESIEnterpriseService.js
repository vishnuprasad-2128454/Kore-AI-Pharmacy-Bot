const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const qs = require("qs");
const { requestHeaders } = require("../constants");
const { makeHttpCall } = require("../makeHttpCall");

module.exports = {
  /**
   * Get the order details from database.
   * @param {*} id the required file.
   * @returns the id details.
   */
  async getOrderDetails(orderId) {
    const url = `${process.env.ESI_ORDER_ID_RESPONSE_URL}=${orderId}`;
    console.log("url",url)
    return makeHttpCall("get", url)
      .then(function (res) {
        return resolve(res.data);
      })
      .catch(function (err) {
        return reject(err);
      });
  },

  /**
   * Get the member details from database.
   * @param {*} id the required file.
   * @returns the id details.
   */

  async getMemberDetails(memberId) {
    const url = `${process.env.ESI_MEMBER_ID_RESPONSE_URL}=${memberId}`;
    return makeHttpCall("get", url)
      .then(function (res) {
        return resolve(res.data);
      })
      .catch(function (err) {
        return reject(err);
      });
  },
};
