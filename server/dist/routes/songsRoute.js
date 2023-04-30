"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const songController_1 = require("../controllers/songController");
const router = express_1.default.Router();
router.use(express_1.default.json());
router.get('/', songController_1.getAllSongs);
router.get('/:id', songController_1.getSongById);
router.get('/download/:songId', songController_1.downloadSong);
router.get('/stream/:songId', songController_1.streamSong);
exports.default = router;
