import './App.css';
import React from 'react';

class AudioTrack extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
      audioUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3',
      volume: 0,
      pan:0,
      AudioContext: null
    }
  }

    componentDidMount() {
      const url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3';

      this.state.AudioContext = new (window.AudioContext || window.webkitAudioContext)();
      this.audioCtx = new AudioContext();
      this.audioElement = new Audio(url);
      this.track = this.audioCtx.createMediaElementSource(this.audioElement);
      this.track.connect(this.audioCtx.destination);

      this.gainNode = this.audioCtx.createGain();
      this.gainNode.connect(this.audioCtx.destination);

      this.panner = new StereoPannerNode(this.audioCtx, {pan: 0});
      this.panner.connect(this.audioCtx.destination);

      this.gainNode.gain.value =  0.5;

    }


  updatePlay() {
    //this.audioCtx.resume();
    this.state.AudioContext.resume();

    //;
  }




    updateVolume(vol) {
      this.gainNode.gain.value = vol;
    }

    updatePan(pan) {
      this.panner.pan.value = pan;

    }
    /**
    updateSound(URL) {
      const context = new AudioContext();
      let trackBuffer;
      let audioBuffer;
      const playButton = true;

      window.fetch(URL)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
        .then(audioBuffer => {
          playButton.disabled = false;
          trackBuffer = audioBuffer;
        });
        const source = context.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(context.destination);
        source.start();
    }**/

    //this.gainNode.gain.value =  0.5;


    // reverb
    componentWillUnmount() {
      this.track.disconnect();
    }
    //filter
  }

function dunkyBot() {
  const url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3';

  //this.audioCtx = new AudioContext();
  const audioElement = new Audio(url);
  audioElement.play();
  //const act = new AudioTrack();
}

function App() {
  return (
    <div className="App bg-dark container-fluid text-light">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            EZBeatz
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/samples"
                >
                  Samples and Effects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  Meet the Creators
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="btn-group-vertical col">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <circle fill="grey" cx="10" cy="10" r="5" />
            </svg>
            <button type="button" className="btn btn-primary">
              Reverb
            </button>
            <button type="button" className="btn btn-success">
              Volume
              <br></br>
              <input type="range" />
            </button>
            <button type="button" className="btn btn-warning">
              Panning
              <br></br>
              <input type="range" />
            </button>
          </div>
          <div className="btn-group-vertical col">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <circle fill="grey" cx="10" cy="10" r="5" />
            </svg>
            <button type="button" className="btn btn-primary">
              Reverb
            </button>
            <button onClick={
                dunkyBot()
    }>
    button </button>
            <button type="button" className="btn btn-success">
              Volume
              <br></br>
              <input type="range" />
            </button>
            <button type="button" className="btn btn-warning">
              Panning
              <br></br>
              <input type="range" />
            </button>
          </div>
          <div className="btn-group-vertical col">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <circle fill="grey" cx="10" cy="10" r="5" />
            </svg>
            <button type="button" className="btn btn-primary">
              Reverb
            </button>
            <button type="button" className="btn btn-success">
              Volume
              <br></br>
              <input type="range" />
            </button>
            <button type="button" className="btn btn-warning">
              Panning
              <br></br>
              <input type="range" />
            </button>
          </div>
          <div className="btn-group-vertical col">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <circle fill="grey" cx="10" cy="10" r="5" />
            </svg>
            <button type="button" className="btn btn-primary">
              Reverb
            </button>
            <button type="button" className="btn btn-success">
              Volume
              <br></br>
              <input type="range" />
            </button>
            <button type="button" className="btn btn-warning">
              Panning
              <br></br>
              <input type="range" />
            </button>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h1>Sounds</h1>
        <div className="row">
          <div className="col">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <circle fill="pink" cx="10" cy="10" r="5" />
            </svg>
          </div>
          <div className="col">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <circle fill="green" cx="10" cy="10" r="5" />
            </svg>
          </div><div className="col">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <circle fill="red" cx="10" cy="10" r="5" />
            </svg>
          </div>
          <div className="col">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <circle fill="yellow" cx="10" cy="10" r="5" />
            </svg>
          </div>
          <div className="col">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <circle fill="purple" cx="10" cy="10" r="5" />
            </svg>
          </div>
          <div className="col">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <circle fill="orange" cx="10" cy="10" r="5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
