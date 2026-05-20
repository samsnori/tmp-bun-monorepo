/* ------------------------------------------------------- */

import {
  useState,
  useEffect
} from 'react';

/* ------------------------------------------------------- */

function TestComponent() {

  const [message, setMessage ] = useState('My Test Component');

  useEffect(() => {
    setMessage("Updated message from hook, in test component.");
  }, []);
  
  return (
    <div>
      <div>{message}</div>
      <div>Another Message!</div>
    </div>
  );
}

/* ------------------------------------------------------- */

export {
  TestComponent,
};

/* ------------------------------------------------------- */
