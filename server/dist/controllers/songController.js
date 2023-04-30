"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.streamSong = exports.downloadSong = exports.getSongById = exports.getAllSongs = void 0;
const fs_1 = __importDefault(require("fs"));
// Get All Songs Controller
const getAllSongs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const songs = yield getSongs();
    const songList = songs.map(({ id, title, song, image, alt, download }) => {
        return { id, title, song, image, alt, download };
    });
    res.status(200).json(songList);
});
exports.getAllSongs = getAllSongs;
// Get Song By Id Controller
const getSongById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const songs = yield getSongs();
    const songId = req.params.id;
    const song = songs.find((song) => song.id === songId);
    if (!song) {
        // return res.status(404).json({ error: 'File not found bro!' });
        return handleError(res, 404, 'File not found bro!');
    }
    res.status(200).json(song);
});
exports.getSongById = getSongById;
// Download Song Controller
const downloadSong = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const songTitle = req.params.songTitle;
    console.log(songTitle);
    const songList = yield getSongs();
    const lastElement = songList[songList.length - 1];
    console.log(lastElement);
    // console.log(songList);
    const song = songList.find((song) => song.title === songTitle);
    console.log(song);
    if (!song) {
        return handleError(res, 404, 'File not found bro!');
    }
    const filePath = `./public/songs/${songTitle}.wav`;
    console.log(filePath);
    try {
        res.download(filePath);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error while downloading song' });
    }
});
exports.downloadSong = downloadSong;
// Stream Song Controller
const streamSong = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const songTitle = req.params.songTitle;
    const songList = yield getSongs();
    const song = songList.find((song) => song.title === songTitle);
    if (!song) {
        return handleError(res, 404, 'File not found bro!');
    }
    const filePath = `./public/songs/${songTitle}.wav`;
    const stat = fs_1.default.statSync(filePath);
    const fileSize = stat.size;
    const range = req.headers.range;
    if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        if (start >= fileSize) {
            res
                .status(416)
                .send('Resquested range not satisfiable\n' + start + ' >= ' + fileSize);
            return;
        }
        const chunksize = end - start + 1;
        const file = fs_1.default.createReadStream(filePath, { start, end });
        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'audio/wav',
        };
        res.writeHead(206, head);
        file.pipe(res);
    }
    else {
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'audio/wav',
        };
        res.writeHead(200, head);
        fs_1.default.createReadStream(filePath).pipe(res);
    }
});
exports.streamSong = streamSong;
// Error Handler
function handleError(res, statusCode, message) {
    res.status(statusCode).json({ error: message });
}
// Get songs from JSON file
function getSongs() {
    return __awaiter(this, void 0, void 0, function* () {
        const songsData = yield fs_1.default.promises.readFile('data/songs.json');
        return JSON.parse(songsData.toString());
    });
}
