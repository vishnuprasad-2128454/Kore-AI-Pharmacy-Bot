var Application = require("./lib/app");
var Server = require("./lib/server");
var sdk = require("./lib/sdk");
var config = require("./config");
var app = new Application(null, config);
var server = new Server(config, app);
const {verbiageBuilder} = require("./verbiageBuilder");
const constants = require('./constants/botConstants');
sdk.checkNodeVersion();
server.start();

constants.botConversationResponse.verbiage_En_RespData = verbiageBuilder("./resources/ESI_PHA_BOT_RESP_BUILDER_EN_CA.xlsx");
constants.botConversationResponse.verbiage_Fr_RespData = verbiageBuilder("./resources/ESI_PHA_BOT_RESP_BUILDER_FR_CA.xlsx");


sdk.registerBot(require("./PharmacyBot.js"));