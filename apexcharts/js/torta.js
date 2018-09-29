var options = {
    chart: {
        width: 380,
        type: 'pie',
    },
    series: [44, 55, 13, 43, 22],
    labels: ["Activa", "Reactiva", "Potencia", "Penaliza", "Otra"],
    
    responsive: [{
        breakpoint: 700,
        options: {
          plotOptions: {
            bar: {
              horizontal: false
            }
          },
          legend: {
            position: 'bottom'
          }
        }
      }]

}

var chartEnTorta = new ApexCharts(
    document.querySelector("#chartEnTorta"),
    options
);

chartEnTorta.render();
