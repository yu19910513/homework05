// for info storage and diplay
var allText = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

for (let j = 0; j < allText.length; j++) {
    $('.saveBtn'+j).click(function(){
    localStorage.setItem("message"+j, $("#textarea"+j).val());
    });
};

for (let j = 0; j < allText.length; j++) {
    $("#textarea" + j).text(localStorage.getItem("message"+j));
};

// for timeline and color change

setInterval(function timeClock() {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    var allHours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    for (let i = 0; i < allHours.length; i++) {
        var jQHour = $('#'+i);

        function present(){
            jQHour.removeClass('future').addClass('present');
        };

        if (moment().hour() == i) {
            present()
        };

    };

    for (let i = 0; i < allHours.length; i++) {
        var jQHour = $('#'+i);

        function past(){
            jQHour.removeClass('present').addClass('past');
        };

        if (moment().hour() > i) {
            past()
        };

    };

    for (let i = 0; i < allHours.length; i++) {
        var jQHour = $('#'+i);

        function future(){
            jQHour.removeClass('past').addClass('future');
        };

        if (moment().hour() < i) {
            future();
        };

    };

    weather();

} , 1000);
