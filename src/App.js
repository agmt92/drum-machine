import React from 'react';
import { connect } from 'react-redux';
import { setVolume, updateDisplay } from './redux';
import './App.scss';

class VolumeSlider extends React.Component {
  handleChange = (event) => {
    this.props.setVolume(event.target.value);
  };

  render() {
    return (
      <div className="flex-column">
        <div id="volume-display"><a>{Math.round(this.props.volume * 100)}</a></div>
        <input className="slider" type="range" min="0" max="1" step="0.01" value={this.props.volume} onChange={this.handleChange} />
      </div>
    );
  }
}

class DrumPad extends React.Component {
  playSound = () => {
    const sound = document.getElementById(this.props.id);
    sound.currentTime = 0;

    // Ensure volume is a finite number and within the valid range
    const volume = parseFloat(this.props.volume).toFixed(2);
    if (isFinite(volume) && volume >= 0.0 && volume <= 1.0) {
      sound.volume = volume;
      console.log('Volume set to:', volume);
    } else {
      console.error('Invalid volume value:', (this.props.volume));
    }

    sound.play();
    console.log('Sound played at volume:', sound.volume);
    this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
  };


  handleKeyPress = (event) => {
    if (event.keyCode === this.props.id.charCodeAt()) {
      this.playSound();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <div className="drum-pad" id={this.props.clipId} onClick={this.playSound}>
        <audio className="clip" id={this.props.id} src={this.props.src}></audio>
      </div>
    );
  }
}

class DrumContainer extends React.Component {
  render() {
    return (
      <div id="drum-machine" className="container">
        <div className="row">
          <div className="col-3 side-tools">
            <div id="display-container"><a>{this.props.display}</a></div>
            <VolumeSlider volume={this.props.volume} setVolume={this.props.setVolume} />
            <h1>KORG-AG</h1>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-3">
                <DrumPad volume={this.props.volume}
 id="Q" clipId="heater-1" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" updateDisplay={this.props.updateDisplay} />
              </div>
              <div className="col-3">
                <DrumPad volume={this.props.volume}
 id="W" clipId="heater-2" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" updateDisplay={this.props.updateDisplay} />
              </div>
              <div className="col-3">
                <DrumPad volume={this.props.volume}
 id="E" clipId="heater-3" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" updateDisplay={this.props.updateDisplay} />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <DrumPad volume={this.props.volume}
 id="A" clipId="heater-4" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" updateDisplay={this.props.updateDisplay} />
              </div>
              <div className="col-3">
                <DrumPad volume={this.props.volume}
 id="S" clipId="clap" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" updateDisplay={this.props.updateDisplay} />
              </div>
              <div className="col-3">
                <DrumPad volume={this.props.volume}
 id="D" clipId="open-hh" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" updateDisplay={this.props.updateDisplay} />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <DrumPad volume={this.props.volume}
 id="Z" clipId="kick-n-hat" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" updateDisplay={this.props.updateDisplay} />
              </div>
              <div className="col-3">
                <DrumPad volume={this.props.volume}
 id="X" clipId="kick" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" updateDisplay={this.props.updateDisplay} />
              </div>
              <div className="col-3">
                <DrumPad volume={this.props.volume}
 id="C" clipId="closed-hh" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" updateDisplay={this.props.updateDisplay} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  volume: state.volume,
  display: state.display
});

const mapDispatchToProps = {
  setVolume,
  updateDisplay
};

const ConnectedDrumContainer = connect(mapStateToProps, mapDispatchToProps)(DrumContainer);

class App extends React.Component {
  render() {
    return (
      <div>
        <ConnectedDrumContainer />
      </div>
    );
  }
}

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;