
var ctxLine = document.getElementById("line-chart").getContext("2d");
var ctxPie = document.getElementById("pie-chart").getContext("2d");
var ctxDoughnut = document.getElementById("doughnut-chart").getContext("2d");
var myChart = new Chart(ctxLine, {
    type: 'bar',
    data: {
        labels: ["First", "Second", "Third", "Fourth", "Fifth", "Sixth"],
        datasets: [{
            data: [40, 30, 10, 80, 0, 25],
            backgroundColor: [
                'rgb(255, 89, 3)',
                'rgb(51, 101, 138)',
                'rgb(134, 187, 216)',
                'rgb(117, 142, 79)',
                'rgb(255, 159, 64)',
                'rgb(246, 174, 45)',
            ],
        }],
    },
});

var myPieChart = new Chart(ctxPie,{
    type: 'pie',
    data: {
            labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBorderWidth: [1, 1, 1],
        }],
    }
});

var myDoughnutChart = new Chart(ctxDoughnut, {
    type: 'doughnut',
    data: {
            labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBorderWidth: [1, 1, 1],
        }],
    }
});