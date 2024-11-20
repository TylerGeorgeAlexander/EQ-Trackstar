// Fetch data from the external JSON file
import mobData from './raidMobs.json' assert { type: 'json' };

// Populate the raid mob table
const mobList = document.getElementById('mob-list');

function populateMobs(data) {
  data.forEach(mob => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${mob.name}</td>
      <td>${mob.location}</td>
      <td>${mob.spawnTimer}</td>
      <td>${mob.variance}</td>
      <td>None</td>
    `;
    mobList.appendChild(row);
  });
}

// Load mob data
document.addEventListener('DOMContentLoaded', () => {
  populateMobs(mobData);
});
