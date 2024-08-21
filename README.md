# Drum Machine

This project is an exam of the freeCodeCamp Front End Development Libraries curriculum. It is a Drum Machine built using React and Redux. The application allows users to play drum sounds by clicking on buttons or pressing corresponding keys on the keyboard. Users can also adjust the volume of the sounds.

You can view the live demo of the project [here](https://agmt92.github.io/drum-machine/).

## Table of Contents

- Introduction
- Features
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- Usage
- [Project Structure](#project-structure)
- Troubleshooting
- Contributing
- License

## Introduction

The Drum Machine is a web application that provides a simple interface for playing drum sounds. It is built using React for the user interface and Redux for state management. This project is part of the freeCodeCamp Front End Development Libraries curriculum.

## Features

- **Play Drum Sounds**: Click on the drum pads or press corresponding keys to play drum sounds.
- **Volume Control**: Adjust the volume of the drum sounds using a slider.
- **Responsive Design**: The application is responsive and works well on different screen sizes.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management.
- **SCSS**: For styling the application.
- **JavaScript**: For handling logic and interactions.

## Setup and Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/drum-machine.git
    cd drum-machine
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

4. **Open the application**:
    Open your web browser and go to [`http://localhost:3000`](http://localhost:3000).

## Usage

- **Play Drum Sounds**: Click on the drum pads or press the corresponding keys (Q, W, E, A, S, D, Z, X, C) to play drum sounds.
- **Adjust Volume**: Use the volume slider to adjust the volume of the drum sounds.

## Project Structure

```
drum-machine/
│
├── public/                 # Public assets
│   ├── index.html          # Main HTML file
│   └── ...
│
├── src/                    # Source files
│   ├── App.js              # Main App component
│   ├── App.scss            # SCSS styles
│   ├── index.js            # Entry point
│   ├── redux/              # Redux actions and reducers
│   └── ...
│
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Troubleshooting

If port 3000 is already in use, you can find the process ID (PID) and kill it using the following steps:

1. **Find the PID**:
    ```bash
    lsof -i :3000
    ```

    This command will list the processes using port 3000. Look for the PID in the output.

2. **Kill the process**:
    ```bash
    kill -9 <PID>
    ```

    Replace `<PID>` with the actual process ID you found in the previous step.

3. **Restart the server**:
    ```bash
    npm start
    ```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Thank you for checking out my Drum Machine project! If you have any questions or feedback, feel free to reach out.
