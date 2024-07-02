function updateTime() {
    const now = new Date();
    const targetDate = new Date('2024-08-15T00:00:00');
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
        document.getElementById('time').textContent = "00:00:00:00";
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000).toString().padStart(2, '0');

    document.getElementById('time').textContent = `Férias André - ${days} dias ${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();
