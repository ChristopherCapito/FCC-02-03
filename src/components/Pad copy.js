import React, { useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
const Pad = props => {
  const trigger = event => {
    if (event.key !== undefined) {
      let str = event.key.toUpperCase();
      if (str === props.drum_key) {
        let audio_element = document.getElementById(str);
        audio_element.load();
        var playPromise = audio_element.play();

        if (playPromise !== undefined) {
          playPromise
            .then(_ => {
              // Automatic playback started!
              // Show playing UI.
              console.log('audio played auto');
            })
            .catch(error => {
              // Auto-play was prevented
              // Show paused UI.
              console.log('playback prevented');
            });
        }
      }
    }

    let curId = event.target.children[0].id;
    if (curId.toUpperCase() === props.drum_key) {
      let audio_element = document.getElementById(curId);
      audio_element.load();
      playPromise = audio_element.play();

      if (playPromise !== undefined) {
        playPromise
          .then(_ => {
            // Automatic playback started!
            // Show playing UI.
            console.log('audio played auto');
          })
          .catch(error => {
            // Auto-play was prevented
            // Show paused UI.
            console.log('playback prevented');
          });
      }
    }
    console.log(event.key)
  };

  useEffect(() => {
    document.addEventListener('keydown', trigger, false);
    return () => {
      document.removeEventListener('keydown', trigger, false);
    };
  }, []);

  const audio_tag = useRef(null);

  return (
    <Button
      id={props.desc}
      className='drum-pad'
      bsPrefix='drumPad'
      onClick={e => trigger(e)}
    >
      {props.drum_key}
      <audio
        className='clip'
        id={props.drum_key}
        ref={audio_tag}
        src={props.src}
      />
    </Button>
  );
};

export default Pad;
