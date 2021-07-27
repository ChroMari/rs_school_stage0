import VideoView from "./VideoView.js";
import VideoBigBtn from "./VideoBigBtn.js";
import BackBtn from "./BackBtn.js";
import PlayBtn from "./PlayBtn.js";
import NextBtn from "./NextBtn.js";
import ProgressBar from "./ProgressBar.js";
import Song from "./Song.js";
import FullScreenBtn from "./FullScreenBtn.js";
import videoArrays from "./db.js";

const playWind = document.querySelector('.player');
const video = new VideoView(playWind).render(); // таким образом у нас будет тоже, что и при  const video = document.createElement('video');

const bodyVideo = document.createElement('div'); // общая секция для всех кнопок управления
bodyVideo.classList.add('player__controls');
playWind.appendChild(bodyVideo);

const bigBtnPlay = new VideoBigBtn(video, playWind).render(); // таким образом у нас будет тоже, что и при const bigBtnPlay = document.createElement('button');

const btnWrapper = document.createElement('div'); // обертка для 3 кнопок управления
bodyVideo.appendChild(btnWrapper);
const backBtn = new BackBtn(btnWrapper, video, videoArrays).render(); //кнопка для видео назад
const playBtn = new PlayBtn(btnWrapper, video).render(); // кнопка для паузы и запуска видео
const nextBtn = new NextBtn(btnWrapper, video, videoArrays).render(); // кнопка, которая переключает нас на новое видео

const progressBar = new ProgressBar(bodyVideo, video).render(); // полоса прогресса показывающего видео

const songWrapper = document.createElement('div');
songWrapper.classList.add('player__song-wrapper');
bodyVideo.appendChild(songWrapper);
const song = new Song(songWrapper, video).render(); // звук для видеопреера

const fullScreenBtn = new FullScreenBtn(bodyVideo, playWind).render(); // фулл видео пдеер