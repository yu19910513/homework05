setInterval(function timeClock() {
    $('#currentDay').text(moment())
}, 1000);
timeClock();
