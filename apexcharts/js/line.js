var options = {
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight' //'straight'-->marcada "smooth"-->curveada
    },
    series: [{
        name: "Kw/h",
        data: [30, 41, 35, 51, 49, 62, 69, 91, 126, 100, 120]
    }],
    title: {
        text: 'Historico de consumo Kw/h',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
        categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov'],
    },
}

var chart = new ApexCharts(
    document.querySelector("#chart"),
    options
);

chart.render();