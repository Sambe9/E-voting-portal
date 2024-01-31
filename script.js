let votes = {
    candidate1: 0,
    candidate2: 0
};

function vote(candidate) {
    votes[candidate]++;
    updateResults();
}

function updateResults() {
    const totalVotes = votes.candidate1 + votes.candidate2;
    const percentage1 = (votes.candidate1 / totalVotes) * 100 || 0;
    const percentage2 = (votes.candidate2 / totalVotes) * 100 || 0;

    document.getElementById('result-chart').innerHTML = `<p>Live Voting Percentage</p>
        <canvas id="chartCanvas" width="200" height="200"></canvas>`;

    const ctx = document.getElementById('chartCanvas').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['INC','BJP'],
            datasets: [{
                data: [percentage1, percentage2],
                backgroundColor: ['#3CA439','#EA8520 ']
            }]
        }
    });
}

