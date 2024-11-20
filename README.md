# EverTrack

**EverTrack** is a raid mob tracking application designed to help players efficiently organize, monitor, and prepare for raid encounters in Norrath. Featuring dynamic tracking, player assignment, and readiness status, EverTrack ensures your guild is always raid-ready.

---

## Features

- **Comprehensive Mob Tracking**: View spawn timers, variance, and readiness status for all key raid mobs.
- **Player Assignment**: Assign your character's name, class, and level to specific raid encounters.
- **Readiness Check**: Visual indicators show whether an encounter is raid-ready based on player assignments.
- **Customizable Tracking**: Easily extend mob lists or tailor timers to suit your server’s rules.

---

## Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge).
- Optional: A local web server for hosting (e.g., `http-server` or Python's `http.server`).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TylerGeorgeAlexander/EverTrack.git
   cd EverTrack
   ```

2. Serve the files locally:
   - Using `http-server`:
     ```bash
     npx http-server
     ```
   - Using Python:
     ```bash
     python -m http.server
     ```

3. Open `index.html` in your browser.

---

## Usage

1. **View Mobs**: The main table displays all tracked raid mobs, including their spawn timers, variance, and assigned players.
2. **Assign Characters**: Use the form to assign your character's name, class, and level to a specific raid mob.
3. **Readiness Check**: Check the status indicators to see which encounters are ready for tracking or need more players.

---

## File Structure

```
/EverTrack
  ├── index.html       # Main HTML file
  ├── styles.css       # Styling for the app
  ├── script.js        # JavaScript logic for dynamic features
  ├── raidMobs.json    # JSON file containing raid mob data
  └── README.md        # Project documentation
```

---

## Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions, suggestions, or feedback, reach out.

Happy raiding! 🎮

