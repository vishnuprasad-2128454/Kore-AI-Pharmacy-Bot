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
    let data = { query: orderId };
    let url = process.env.ESI_ORDER_ID_RESPONSE_URL;
    let orderIdQueryParamData = qs.stringify(data);
    makeHttpCalleHttpCall("post", url, orderIdQueryParamData, requestHeaders)
      .then(function (res) {
        return res.data;
      })
      .catch(function (err) {
        return err;
      });
  },

  /**
   * Get the member details from database.
   * @param {*} id the required file.
   * @returns the id details.
   */

  async getMemberDetails(memberId) {
    let data = { query: memberId };
    let url = process.env.ESI_MEMBER_ID_RESPONSE_URL;
    let memberIdQueryParamData = qs.stringify(data);
    makeHttpCall("post", url, memberIdQueryParamData, requestHeaders)
      .then(function (res) {
        return res.data;
      })
      .catch(function (err) {
        return err;
      });
  },
};
