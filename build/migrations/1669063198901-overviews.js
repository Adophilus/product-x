"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const Overview_1 = __importDefault(require("@/models/Overview"));
async function up(next) {
    await Overview_1.default.createMany([
        {
            name: 'registeredUsers',
            value: 10
        },
        {
            name: 'registeredTracks',
            value: 10
        }
    ]);
    next();
}
exports.up = up;
async function down(next) {
    await Overview_1.default.deleteMany();
    next();
}
exports.down = down;
