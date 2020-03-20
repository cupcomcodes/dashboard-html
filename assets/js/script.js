(function($) {

    $(document).ready(function() {
        $('#example').DataTable(

            {

                "aLengthMenu": [
                    [5, 10, 25, -1],
                    [5, 10, 25, "All"]
                ],
                "iDisplayLength": 5
            }
        );
    });

    $(".dash_list-item-expand").click(function() {
        $(".dash_container").toggleClass("expand");
        $(".dash_container").toggleClass("collapse-expand");
    });

    $(".dash_section-menu-mobile").click(function() {
        $(".dash_container").toggleClass("expand");
    });


    $(document).ready(function() {
        var validateInput = $('input.validate');
        
        function validateInputs() {
            var password = $('#pass').val(),
                conf = $('#conf').val(),
                all_pass = true;
                
            var uppercase = password.match(/[A-Z]/),
                number = password.match(/[0-9]/);

            if (password.length < 8) {
                $('.password_length').removeClass('complete');
                all_pass = false;
            } else $('.password_length').addClass('complete');

            if (uppercase) $('.password_uppercase').addClass('complete');
            else {
                $('.password_uppercase').removeClass('complete');
                all_pass = false;
            }
            
            if (number) $('.password_number').addClass('complete');
            else {
                $('.password_number').removeClass('complete');
                all_pass = false
            }


            if (password == conf && password != '') $('.password_match').addClass('complete');
            else {
                $('.password_match').removeClass('complete')
                all_pass = false;
            }
        }
        validateInput.each(validateInputs).on('keyup', validateInputs);
        
        function showPassword() {
            if(validateInput.attr('type') === 'password') {
                validateInput.attr('type', 'text');
            }
            else if(validateInput.attr('type') === 'text') {
                console.log('else');
                validateInput.attr('type', 'password');
            }
        }
        $('.togglePassword').on('click', showPassword);
    });

    var options = {
        chart: {
            type: "area",
            height: 300,
            foreColor: "#999",
            stacked: true,
            dropShadow: {
                enabled: true,
                enabledSeries: [0],
                top: -2,
                left: 2,
                blur: 5,
                opacity: 0.06
            }
        },
        colors: ['#00E396', '#0090FF'],
        stroke: {
            curve: "smooth",
            width: 3
        },
        dataLabels: {
            enabled: false
        },
        series: [{
            name: 'Total Views',
            data: generateDayWiseTimeSeries(0, 18)
        }, {
            name: 'Unique Views',
            data: generateDayWiseTimeSeries(1, 18)
        }],
        markers: {
            size: 0,
            strokeColor: "#fff",
            strokeWidth: 3,
            strokeOpacity: 1,
            fillOpacity: 1,
            hover: {
                size: 6
            }
        },
        xaxis: {
            type: "datetime",
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            labels: {
                offsetX: 14,
                offsetY: -5
            },
            tooltip: {
                enabled: true
            }
        },
        grid: {
            padding: {
                left: -5,
                right: 5
            }
        },
        tooltip: {
            x: {
                format: "dd MMM yyyy"
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left'
        },
        fill: {
            type: "solid",
            fillOpacity: 0.7
        }
    };

    var chart = new ApexCharts(document.querySelector("#timeline-chart"), options);

    chart.render();

    function generateDayWiseTimeSeries(s, count) {
        var values = [
            [
                4, 3, 10, 9, 29, 19, 25, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5
            ],
            [
                2, 3, 8, 7, 22, 16, 23, 7, 11, 5, 12, 5, 10, 4, 15, 2, 6, 2
            ]
        ];
        var i = 0;
        var series = [];
        var x = new Date("11 Nov 2012").getTime();
        while (i < count) {
            series.push([x, values[s][i]]);
            x += 86400000;
            i++;
        }
        return series;
    }

    // radial chart

    var options = {
        series: [75],
        chart: {
            height: 278,
            type: 'radialBar',
            toolbar: {
                show: true
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 225,
                hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24
                    }
                },
                track: {
                    background: '#fff',
                    strokeWidth: '67%',
                    margin: 0, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.35
                    }
                },

                dataLabels: {
                    show: true,
                    name: {
                        offsetY: -10,
                        show: true,
                        color: '#888',
                        fontSize: '17px'
                    },
                    value: {
                        formatter: function(val) {
                            return parseInt(val);
                        },
                        color: '#111',
                        fontSize: '36px',
                        show: true,
                    }
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#ABE5A1'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Percent'],
    };

    var chart = new ApexCharts(document.querySelector("#radial-chart"), options);
    chart.render();


})(jQuery);