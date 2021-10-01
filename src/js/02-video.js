import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// Разбери документацию метода on() и начни отслеживать событие timeupdate - 
// обновление времени воспроизведения.
// Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для 
// хранилища будет строка "videoplayer-current-time".
// При перезагрузке страницы воспользуйся методом setCurrentTime() для того 
// чтобы возобновить воспроизведение с сохраненной позиции.
// Добавь в проект бибилотеку lodash.throttle и сделай так, чтобы время воспроизведения 
// обновлялось в хранилище не чаще чем раз в секунду.


player.on('timeupdate', throttle(data =>
    {
        localStorage.setItem("videoplayer-current-time", data.seconds)
    }, 1000));

const setTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(setTime || 0);