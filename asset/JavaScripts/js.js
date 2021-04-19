var allText = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

// for info storage and diplay
for (let j = 0; j < allText.length; j++) {
    $('.saveBtn'+j).click(function(){
        localStorage.setItem("message"+j, $("#textarea"+j).val());
    });
    $("#textarea" + j).text(localStorage.getItem("message"+j));
};


// for timeline and color change

setInterval(function timeClock() {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    for (let i = 0; i < allText.length; i++) {
        function present(){
            $('#'+i).removeClass('future').addClass('present');
        };
        function past(){
            $('#'+i).removeClass('present').addClass('past');
        };
        function future(){
            $('#'+i).removeClass('past').addClass('future');
        };

        if (moment().hour() > i) {
            past()
        };
        if (moment().hour() == i) {
            present()
        };
        if (moment().hour() < i) {
            future();
        };
    };
} , 1000);
