window.onload = function(){
    var img = document.getElementById("popcat1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("pop.mp3");

    //滑鼠
    img.addEventListener('mousedown', function (){
        increaseScore();
        img.src = 'popcat2.png';
        audio.play();
    });

    img.addEventListener('mouseup', function(){
        img.src = 'popcat1.png';
        audio.play();
    });
    //手機
    img.addEventListener('touchstart', function (){
        increaseScore();
        img.src = 'popcat2.png';
        audio.play();
    });

    img.addEventListener('touchmove', function(){
        img.src = 'popcat1.png';
        audio.play();
    });

    //鍵盤
    img.addEventListener('keydown', function (){ 
        increaseScore();
        img.src = 'popcat2.png';
        audio.play();
    });

    img.addEventListener('keyup', function(){
        img.src = 'popcat1.png';
        audio.play();
    });

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}

function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs >=12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);













