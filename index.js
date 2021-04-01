$(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
        $("#sidebar").toggleClass("active");
    });
});

var linectx = document.getElementById('lineChart').getContext('2d');
var lineChartOne = new Chart(linectx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Products Sold',
            fill: false,
            data: [55, 20, 35, 60, 30, 25],
            backgroundColor: [
                '#A7A7FF'
            ],
            borderColor: [
                '#A3A0FB'
            ],
            borderWidth: 2
        }, {
            label: 'Total Views',
            fill: false,
            data: [25, 40, 55, 35, 20, 60],
            backgroundColor: [
                '#54D8FF'
            ],
            borderColor: [
                '#54D8FF'
            ],
            borderWidth: 2
        }
        ]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            position: 'bottom',
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Months'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var doughnutctx = document.getElementById('doughnutChart').getContext('2d');
var doughnutChart = new Chart(doughnutctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [50, 20, 30, 40],
            backgroundColor: [
                'rgb(85, 216, 254)',
                'rgb(255, 131, 115)',
                'rgb(255, 218, 131)',
                'rgb(163, 160, 251)'
            ]
        }],
        labels: [
            'France',
            'Italy',
            'France',
            'Italy'
        ]
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            position: 'bottom',
            align: 'center'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
});
