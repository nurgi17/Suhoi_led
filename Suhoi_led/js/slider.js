$(document).ready(function () {
    flag = 1;
    $("#nex").click(function () {
        if (flag == 0) {
            $("#led1").css("z-index", "999");
            $("#led2").css("z-index", "9");
            $("#led3").css("z-index", "9");
            $("#led1").css("transform", "translateX(0px) scale(1.05)");
            $("#led2").css("transform", "translateX(0px) scale(1)");
            $("#led3").css("transform", "translateX(0px)");
            flag = 1;
        }
        else if (flag == 1) {
            $("#led3").css("z-index", "999");
            $("#led2").css("z-index", "9");
            $("#led1").css("z-index", "9");
            $("#led3").css("transform", "translateX(-450px) scale(1.2)");
            $("#led1").css("transform", "translateX(0px) scale(1)");
            $("#led2").css("transform", "translateX(0px)");
            flag = 2;
        }
        else if (flag == 2) {
            $("#led2").css("z-index", "999");
            $("#led3").css("z-index", "9");
            $("#led1").css("z-index", "9");
            $("#led2").css("transform", "translateX(-200px) scale(1.1)");
            $("#led3").css("transform", "translateX(0px) scale(1)");
            $("#led1").css("transform", "translateX(0px)");
            flag = 0;
        }
    });
});
