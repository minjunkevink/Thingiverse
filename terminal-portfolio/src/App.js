import React from 'react';
import Terminal from 'react-console-emulator';

function App() {
  const commands = {
    whoami: {
      description: 'Who am I?',
      usage: 'whoami',
      fn: () => {
        return 'Kevin, a software developer and aspiring AI/ML engineer.'
      }
    },
    skills: {
      description: 'Show my skills',
      usage: 'skills',
      fn: () => {
        return 'Javascript, React, Node.js, MongoDB, ...'
      }
    },
    // ... Add more commands as needed
  }

  return (
    <div className="App">
      <Terminal
        commands={commands}
        welcomeMessage={"Welcome to Kevin's terminal portfolio! Type 'help' to see available commands."}
        promptLabel={'$ '}
      />
    </div>
  );
}

export default App;

