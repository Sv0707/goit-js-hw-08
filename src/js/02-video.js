import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(data =>
    {
        localStorage.setItem("videoplayer-current-time", data.seconds)
    }, 1000));

const setTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(setTime || 0);