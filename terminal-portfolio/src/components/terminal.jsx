import React, { useState } from 'react';

function Terminal() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    "Welcome to Kevin's terminal portfolio! Type 'help' to see available commands.",
  ]);

  const handleCommand = (command) => {
    switch (command) {
      case 'help':
        setMessages([...messages, 'Available commands: ls, cd']);
        break;
      case 'ls':
        setMessages([...messages, 'Projects, AboutMe, Contact']);
        break;
      case 'cd':
        setMessages([...messages, 'Usage: cd <directory-name>']);
        break;
      default:
        setMessages([...messages, `Command '${command}' not found!`]);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  return (
    <div className="terminal">
      {messages.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Terminal;
