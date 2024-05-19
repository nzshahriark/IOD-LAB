import React from 'react';

function Greeting({ name, children }) {
  const greetingText = `Hello ${name || 'World'}`;

  return (
    <div>
      {children || greetingText}
    </div>
  );
}

export default Greeting;
