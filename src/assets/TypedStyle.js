import React from 'react';
import Typed from 'typed.js';

function TypedStyle() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['CS Student', 'Coder', 'Web Developer', 'Pianist', 'NBA Fan'],
      typeSpeed: 80,
      loopCount: Infinity,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App" style={{color: '#576CBC'}}>
      <p style={{color: 'white'}}>Hi, I am a <span style={{color: '#576CBC'}} ref={el} /> </p>
    </div>
  );
}

export default TypedStyle;