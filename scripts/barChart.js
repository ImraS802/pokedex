let statsChart;

function renderStatsChart(singlePokemon) {
  const ctx = document.getElementById('statsChart').getContext('2d');

  if (statsChart) {
    statsChart.destroy();
  }

  const labels = singlePokemon.stats.map((stat) => stat.stat.name);
  const values = singlePokemon.stats.map((stat) => stat.base_stat);

  const statColors = {
    hp: '#4CAF50',
    attack: '#F44336',
    defense: '#2196F3',
    special: '#9C27B0',
    'special-attack': '#FF9800',
    'special-defense': '#03A9F4',
    speed: '#FFEB3B',
  };

  const backgroundColors = labels.map(
    (label) => statColors[label] || '#1b53ba'
  );

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Base Stats',
        data: values,
        backgroundColor: backgroundColors,
        borderColor: 'white',
        borderWidth: 2,
        barPercentage: 0.6,
      },
    ],
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      indexAxis: 'y',
      responsive: true,
      plugins: {
        legend: {display: false},
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: {color: 'white'},
          grid: {color: 'rgba(255,255,255,0.2)'},
        },
        y: {
          ticks: {color: 'white'},
          grid: {display: false},
        },
      },
    },
  };

  statsChart = new Chart(ctx, config);
}
