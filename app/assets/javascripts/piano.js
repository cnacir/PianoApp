var notesByKeyCode = {
		65: { noteName: 'F3', frequency: 174.61, keyName: 'a' },
		87: { noteName: 'F3#', frequency: 185.00, keyName: 'w' },
		83: { noteName: 'G3', frequency: 196.00, keyName: 's' },
		69: { noteName: 'G3#', frequency: 207.65, keyName: 'e' },
		68: { noteName: 'A3', frequency: 220.00, keyName: 'd' },
		82: { noteName: 'A3#', frequency: 233.08, keyName: 'r' },
		70: { noteName: 'B3', frequency: 246.94, keyName: 'f' },
		71: { noteName: 'C4', frequency: 264.63, keyName: 'g' },
		89: { noteName: 'C4#', frequency: 277.18, keyName: 'y' },
		72: { noteName: 'D4', frequency: 293.66, keyName: 'h' },
		85: { noteName: 'D4#', frequency: 311.13, keyName: 'u' },
		74: { noteName: 'E4', frequency: 329.63, keyName: 'j' }
};

var piano = document.getElementById("#piano")
var waveForm = 'sine'

// Create the audio context
var context = new (window.AudioContext || window.webkitAudioContext)();

class Sound {

  constructor(context, type) {
    this.context = context;
		this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
		this.oscillator.type = type;
  };


  play(value) {
    this.oscillator.frequency.value = value;
    this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
    this.gainNode.gain.linearRampToValueAtTime(3, this.context.currentTime + 0.02);

    this.oscillator.start(this.context.currentTime);
    this.stop(this.context.currentTime);
  };

  stop() {
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 1);
    this.oscillator.stop(this.context.currentTime + 1);
  }

};


function playPiano() {
		window.addEventListener("keydown", (e) => {
			var keyCode = e.char || e.charCode || e.which;

			if (keyCode === 49) {
				waveForm = 'sine'
				return
			} else if  (keyCode === 50) {
				waveForm = 'triangle'
				return
			} else if (keyCode === 51) {
				waveForm = 'square'
				return
			} else if (keyCode === 52) {
				waveForm = 'sawtooth'
				return
			}

			var sound = new Sound(context, waveForm)
			var key = document.getElementById(keyCode);
			var freq = key.dataset.frequency;
			key.classList.add('white-animate');
			key.classList.add('black-animate');
			sound.play(freq);
		});

		window.addEventListener("keyup", (e) => {
			var keyCode = e.char || e.charCode || e.which;
			var key = document.getElementById(keyCode);
			key.classList.remove('white-animate');
			key.classList.remove('black-animate');
		});
	};

	document.addEventListener("DOMContentLoaded", (event) => {
		if (!piano) {
			playPiano()
		};
	});
