import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Jumbotron, Row, Card, Col } from 'react-bootstrap';
import Pad from './components/Pad';

function App() {
  const sounds = [
    {
      drum_key: 'Q',
      key: 'Crash',
      src: '/sounds/Crash.wav'
    },
    {
      drum_key: 'W',
      key: 'Cymbal',
      src: '/sounds/Cymbal.wav'
    },
    {
      drum_key: 'E',
      key: 'Hat',
      src: '/sounds/Hat.wav'
    },
    {
      drum_key: 'A',
      key: 'Kick',
      src: '/sounds/Kick.wav'
    },
    {
      drum_key: 'S',
      key: 'Open Hat',
      src: '/sounds/OpenHat.wav'
    },
    {
      drum_key: 'D',
      key: 'Snare 1',
      src: '/sounds/Snare1.wav'
    },
    {
      drum_key: 'Z',
      key: 'Snare 2',
      src: '/sounds/Snare2.wav'
    },
    {
      drum_key: 'X',
      key: 'Snare 3',
      src: '/sounds/Snare3.wav'
    },
    {
      drum_key: 'C',
      key: 'Triangle',
      src: '/sounds/Triangle.wav'
    }
  ];

  const [displayText, setDisplayText] = useState('');

  const handleClickFromParent = event => {
    let id, name;

    if (event.type === 'keydown') {
      try {
        //Add active class

        document
          .getElementById(event.key.toUpperCase())
          .parentElement.classList.add('activePad');

        id = event.key.toUpperCase();
        name = document.getElementById(id).parentElement.id;
        playSounds(name, id);
      } catch (error) {
        console.log('Please use one of the following keys: Q,W,E,A,S,D,Z,X,C');
      }
    } else if (event.type === 'click') {
      name = event.target.id;
      id = event.target.children[0].id;
      playSounds(name, id);
    } else if (event.type === 'keyup') {
      try {
        document
          .getElementById(event.key.toUpperCase())
          .parentElement.classList.remove('activePad');
      } catch {}
    }
  };

  const playSounds = (name, id) => {
    let audioElement = document.getElementById(id);
    setDisplayText(name);
    audioElement.load();

    let playPromise = audioElement.play();

    // In browsers that don’t yet support this functionality,
    // playPromise won’t be defined.
    if (playPromise !== undefined) {
      playPromise
        .then(function() {
          // Automatic playback started!
        })
        .catch(function(error) {
          // Automatic playback failed.
          // Show a UI element to let the user manually start playback.
        });
    }
  };

  
  useEffect(() => {
    document.addEventListener('keydown', handleClickFromParent, false);
    document.addEventListener('keyup', handleClickFromParent, false);
    return () => {
      document.removeEventListener('keydown', handleClickFromParent, false);
      document.removeEventListener('keyup', handleClickFromParent, false);
    };
    
  }, []);

  const pads = sounds.map(e => (
    <Pad
      key={e.key}
      desc={e.key}
      drum_key={e.drum_key}
      src={e.src}
      parent_toggle={handleClickFromParent}
    />
  ));

  return (
    <div className='App'>
      <Container
        id='drum-machine'
        fluid={true}
        style={{ height: '100vh', display: 'flex', alignItems: 'center' }}
        className={'justify-content-md-center'}
      >
        <Row
          style={{ padding: '0.5em', margin: '0', justifyContent: 'center' }}
        >
          <Col>
            <Jumbotron>
              <h1>React Drum Machine</h1>
              <p>
                This is a simple drum machine from the FreeCodeCamp frontend
                certification.
              </p>
              <hr />

              <Card bg='primary' text='white' style={{ width: '18rem' }}>
                <Card.Header id="display">
                  Current Sound: <strong>{displayText}</strong>
                </Card.Header>
              </Card>
              <br />

              <p>{pads}</p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
