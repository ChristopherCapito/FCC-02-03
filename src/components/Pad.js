import React from 'react';
import { Button } from 'react-bootstrap';
const Pad = props => {
  const handleClickFromChild = event => props.parent_toggle(event);

  return (
    <Button
      id={props.desc}
      className='drum-pad'
      onClick={event => handleClickFromChild(event)}
    >
      {props.drum_key}
      <audio className='clip' id={props.drum_key} src={props.src} />
    </Button>
  );
};

export default Pad;
