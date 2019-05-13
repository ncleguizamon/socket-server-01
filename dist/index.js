"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const enviroment_1 = require("./global/enviroment");
const server = new server_1.default();
server.start(() => {
    console.log(`servidor corriendo en el puerto ${enviroment_1.SERVER_PORT}`);
});
