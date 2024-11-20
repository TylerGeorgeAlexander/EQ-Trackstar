// Import the raid mob data from raidMobs.js
import { mobs } from './raidMobs.js';

// DOM Elements
const mobList = document.getElementById('mob-list');
const mobSelect = document.getElementById('mob-select');
const statusContainer = document.getElementById('status-container');

// Populate the mob list table and mob dropdown
function populateMobs() {
  mobList.innerHTML = ''; // Clear the existing mob list
  mobSelect.innerHTML = ''; // Clear the dropdown options

  mobs.forEach((mob, index) => {
    // Add each mob to the table
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${mob.name}</td>
      <td>${mob.spawn.zone}</td>
      <td>${mob.spawn.respawnTime}</td>
      <td>${mob.spawn.location}</td>
      <td>${mob.stats.hp} HP</td>
    `;
    mobList.appendChild(row);

    // Add each mob to the dropdown
    const option = document.createElement('option');
    option.value = index;
    option.textContent = mob.name;
    mobSelect.appendChild(option);
  });
}

// Handle character assignment
function handleAssign() {
  const mobIndex = mobSelect.value; // Get selected mob index
  const name = document.getElementById('character-name').value; // Get player name
  const playerClass = document.getElementById('class-select').value; // Get player class
  const level = document.getElementById('level').value; // Get player level

  // Validation
  if (!name || !level) {
    alert('Please fill out all fields!');
    return;
  }

  // Assign the player to the selected mob
  const player = { name, class: playerClass, level };
  mobs[mobIndex].players = mobs[mobIndex].players || []; // Ensure players array exists
  mobs[mobIndex].players.push(player);

  // Update the mob list and status
  populateMobs();
  updateStatus();
}

// Update readiness status for each mob
function updateStatus() {
  statusContainer.innerHTML = ''; // Clear existing statuses

  mobs.forEach(mob => {
    const div = document.createElement('div');
    const playerCount = mob.players ? mob.players.length : 0;
    const isReady = playerCount > 5; // Define readiness threshold

    div.className = `status ${isReady ? 'good' : 'bad'}`;
    div.textContent = `${mob.name} is ${isReady ? 'Ready for Tracking!' : 'Not Ready Yet'} (${playerCount} players assigned)`;
    statusContainer.appendChild(div);
  });
}

// Event listener for the assign button
document.getElementById('assign-btn').addEventListener('click', handleAssign);

// Initialize the app
populateMobs();
