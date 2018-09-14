try {
    $("#rangeSlider").ionRangeSlider({
        hide_min_max: true,
        hide_from_to: true,
        keyboard: true,
        grid: false,
        from: from,
        values: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 20000, 25000, 30000, 40000, 50000, 80000, 100000],
        onChange: function (range3) {
            if (range3.from_value <= 10000) {
                $("#period").val("7");
                $("#period2").val("От 61 до 130 дней");
                $('#percent').val('95');
            } else if (range3.from_value <= 15000) {
                $("#period").val("14");
                $("#period2").val("От 61 до 130 дней");
                $('#percent').val('95');
            } else if (range3.from_value <= 20000) {
                $("#period").val("21");
                $("#period2").val("От 61 до 130 дней");
                $('#percent').val('95');
            } else if (range3.from_value <= 30000) {
                $("#period").val("21");
                $("#period2").val("От 61 до 130 дней");
                $('#percent').val('85');
            } else if (range3.from_value <= 50000) {
                $("#period").val("30");
                $("#period2").val("От 130 до 250 дней");
                $('#percent').val('77');
            } else if (range3.from_value <= 200000 && range3.from_value > 50000) {
                $("#period").val("30");
                $("#period2").val("От 250 до 365 дней");
                $('#percent').val('65');
            } else if (range3.from_value <= 500000 && range3.from_value > 200000) {
                $("#period").val("30");
                $("#period2").val("От 1 до 3 лет");
                $('#percent').val('58');
            } else {
                $("#period").val("30");
                $("#period2").val("От 1 до 5 лет");
                $('#percent').val('52');
            }
            $("#amount").val(range3.from_value);
            $("#form_slrd").val(range3.from);
        }
    }); 
    var slider = $('#rangeSlider').data('ionRangeSlider');
    var slider_plus = true;
    var n = 10;
    // var slider_init = setInterval(function () {
    //     if (slider_plus) {
    //         n++;
    //     } else {
    //         n--;
    //     }
    //     if (n == 21 && n != from) {
    //         slider_plus = false;
    //     } else if (n == from && slider_plus == false) {
    //         clearInterval(slider_init);
    //     } else if (n == 21 && n == from) {
    //         clearInterval(slider_init);
    //     }
    //     slider.update({
    //         from: n
    //     });
    //     if (n <= 9) {
    //         $('#period').val('7');
    //         $('#period2').val('От 61 до 130 дней');
    //         $('#percent').val('95');
    //     } else if (n <= 14 && n > 9) {
    //         $('#period').val('14');
    //         $('#period2').val('От 61 до 130 дней');
    //         $('#percent').val('95');
    //     } else if (n <= 15 && n > 14) {
    //         $('#period').val('21');
    //         $('#period2').val('От 61 до 130 дней');
    //         $('#percent').val('95');
    //     } else if (n <= 17 && n > 15) {
    //         $('#period').val('21');
    //         $('#period2').val('От 61 до 130 дней');
    //         $('#percent').val('85');
    //     } else if (n <= 19 && n > 17) {
    //         $('#period').val('30');
    //         $('#period2').val('От 130 до 250 дней');
    //         $('#percent').val('77');
    //     } else if (n > 19) {
    //         $('#period').val('30');
    //         $('#period2').val('От 250 до 365 дней');
    //         $('#percent').val('65');
    //     }
    //     $('#amount').val(slider.result.from_value);
    //     $("#form_slrd").val(slider.result.from);
    // }, 50); 
} catch (e) {}