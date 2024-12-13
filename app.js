var Application = require("./lib/app");
var Server = require("./lib/server");
var sdk = require("./lib/sdk");
var config = require("./config");
var app = new Application(null, config);
var server = new Server(config, app);
const { verbiageBuilder } = require("./verbiageBuilder");
const constants = require("./constants/botConstants");
const ESI_PHA_BOT_RESP_BUILDER_EN_CA = require("./resources/ESI_PHA_BOT_RESP_BUILDER_EN_CA.xlsx");
const ESI_PHA_BOT_RESP_BUILDER_FR_CA = require("./resources/ESI_PHA_BOT_RESP_BUILDER_FR_CA.xlsx");
sdk.checkNodeVersion();
server.start();

constants.botConversationResponse.verbiage_En_RespData = verbiageBuilder(
  ESI_PHA_BOT_RESP_BUILDER_EN_CA
);
constants.botConversationResponse.verbiage_Fr_RespData = verbiageBuilder(
  ESI_PHA_BOT_RESP_BUILDER_FR_CA
);

sdk.registerBot(require("./PharmacyBot.js"));
