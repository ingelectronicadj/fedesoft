var options = {
    chart: {
        width: 380,
        type: 'pie',
    },
    series: [44, 55, 13, 43, 22],
    labels: ["Activa", "Reactiva", "Potencia", "Penaliza", "dime Otra"],


}

var chartEnTorta = new ApexCharts(
    document.querySelector("#chartEnTorta"),
    options
);

chartEnTorta.render();
