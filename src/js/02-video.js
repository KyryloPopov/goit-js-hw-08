import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe#vimeo-player');

const player = new Player(iframe);

function getStorageTime() {
  return JSON.parse(localStorage.getItem('videoplayer-current-time'));
}

playerTimeRestore();

function playerTimeRestore() {
  const storageTime = getStorageTime();
  if (storageTime > 0) {
    player.setCurrentTime(storageTime);
  }
}

player.on(
  'timeupdate',
  throttle(evt => {
    const currentTime = evt.seconds;
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(currentTime)
    );
  }, 1000)
);
