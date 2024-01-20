let votes = { candidate1: 0, candidate2: 0 };

function vote(candidateNumber) {
    const candidateId = `candidate${candidateNumber}`;
    votes[candidateId]++;
    updateVotingPercentage();
}

function updateVotingPercentage() {
    const totalVotes = votes.candidate1 + votes.candidate2;
    const percentage1 = ((votes.candidate1 / totalVotes) * 100 || 0).toFixed(2);
    const percentage2 = ((votes.candidate2 / totalVotes) * 100 || 0).toFixed(2);

    document.getElementById('percentage').textContent = `${percentage1}% Candidate 1, ${percentage2}% Candidate 2`;
}

// Add candidates dynamically to the candidates container
document.getElementById('candidatesContainer').innerHTML = `
    <div class="candidate" id="candidate1">
        <img src="anil.png" alt="Candidate 1">
        <div class="candidate-info">
            <h2>Candidate 1 (B.ANIL TEJ)</h2>
            <p>Anil's vision for a harmonious and prosperous India aligns seamlessly with the values of the Congress Party—values rooted in secularism, social justice, and democratic ideals. By casting your vote for B. Anil Tej, you're supporting a leader who comprehends the diverse needs of our community and is committed to bridging gaps, fostering inclusivity, and creating opportunities for all.</p>
            <button class="vote-button" onclick="vote(1)">Vote</button>
        </div>
    </div>
    <div class="candidate" id="candidate2">
        <img src="mohan.jpg" alt="Candidate 2">
        <div class="candidate-info">
            <h2>Candidate 2 (B.MOHANA KRISHNA)</h2>
            <p>B. Mohana Krishna, a dynamic leader and proud member of the BHARATIYA JANTHA PARTY, emerges as a visionary force for positive change in our community. Originating from the culturally Best college of Hyderabad, Mohana's journey from grassroots activism to seasoned politics reflects his steadfast commitment to public service.</p>
            <button class="vote-button" onclick="vote(2)">Vote</button>
        </div>
    </div>
`;
