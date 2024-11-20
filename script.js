// Example data
const mobs = [
  { name: 'Phinigel Autropos', timer: '24 hours', variance: '±2 hours', players: [] },
  { name: 'Protector of Sky', timer: '36 hours', variance: '±4 hours', players: [] },
  { name: 'Lord Nagafen', timer: '7 days', variance: '±12 hours', players: [] }
];

const mobList = document.getElementById('mob-list');
const mobSelect = document.getElementById('mob-select');
const statusContainer = document.getElementById('status-container');

// Populate mob list and mob select dropdown
function populateMobs() {
  mobList.innerHTML = '';
  mobSelect.innerHTML = '';
  mobs.forEach((mob, index) => {
    // Add to table
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${mob.name}</td>
      <td>${mob.timer}</td>
      <td>${mob.variance}</td>
      <td>${mob.players.map(p => p.name).join(', ') || 'None'}</td>
      <td>${mob.players.length > 5 ? 'Ready' : 'Needs Players'}</td>
    `;
    mobList.appendChild(row);

    // Add to select dropdown
    const option = document.createElement('option');
    option.value = index;
    option.textContent = mob.name;
    mobSelect.appendChild(option);
  });
}

// Handle character assignment
document.getElementById('assign-btn').addEventListener('click', () => {
  const mobIndex = mobSelect.value;
  const name = document.getElementById('character-name').value;
  const playerClass = document.getElementById('class-select').value;
  const level = document.getElementById('level').value;

  if (!name || !level) {
    alert('Please fill out all fields!');
    return;
  }

  const player = { name, class: playerClass, level };
  mobs[mobIndex].players.push(player);

  // Update the mob list and status
  populateMobs();
  updateStatus();
});

// Update the status message
function updateStatus() {
  statusContainer.innerHTML = '';
  mobs.forEach(mob => {
    const div = document.createElement('div');
    div.className = `status ${mob.players.length > 5 ? 'good' : 'bad'}`;
    div.textContent = `${mob.name} is ${
      mob.players.length > 5 ? 'Ready for Tracking!' : 'Not Ready Yet'
    }`;
    statusContainer.appendChild(div);
  });
}

// Initialize the app
populateMobs();
