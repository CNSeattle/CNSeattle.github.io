document.addEventListener("DOMContentLoaded", function(){
    let box = document.getElementById("italy");
    box.addEventListener("click", function(){
        box.style.animation = "spin 1s infinite";
        void box.offsetWidth;
    })
});

document.addEventListener("DOMContentLoaded", function(){
    let box = document.getElementById("shark");
    box.addEventListener("click", function(){
        box.style.animation = "spin .1s infinite, moveSideToSide2 1s infinite";

    })
});



 