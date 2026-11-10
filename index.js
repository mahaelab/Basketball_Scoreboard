function addScore(id, points) {
    const score = document.getElementById(id)
    score.textContent = Number(score.textContent) + points
}

function reset() {
    document.getElementById('leftScoreBoard').textContent = 0
    document.getElementById('rightScoreBoard').textContent = 0
}