import React, { useState } from 'react';
import './ServiceUnavailable.css';

const ServiceUnavailable =(props)=> {
  const [hasError, setHasError] = useState(false);

  const handleErrors=(error)=> {
    setHasError(true);
  }

  if (hasError) {
    return <h1 id='msg'>503 Service Unavailable</h1>;
  }

  return (
    <>
    <div className='errorServices'>
    {props.children}

    </div>
      
    </>
  );
}

export default ServiceUnavailable;





