import express, { Router } from 'express';
import {
  downloadSong,
  getAllSongs,
  getSongById,
  streamSong,
} from '../controllers/songController';

const router: Router = express.Router();

router.use(express.json());

router.get('/', getAllSongs);
router.get('/:id', getSongById);
router.get('/download/:songTitle', downloadSong);
router.get('/stream/:songTitle', streamSong);

export default router;
