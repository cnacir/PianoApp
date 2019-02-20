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

// Create the audio context
var context = new (window.AudioContext || window.webkitAudioContext)();

class Sound {

  constructor(context) {
    this.context = context;
  };

  setup() {
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
    this.oscillator.type = 'sine';
  };

  play(value) {
    this.setup();

    this.oscillator.frequency.value = value;
    this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
    this.gainNode.gain.linearRampToValueAtTime(1, this.context.currentTime + 0.01);

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
			var sound = new Sound(context);
			var keyCode = e.char || e.charCode || e.which
			var key = document.getElementById(keyCode)
			var freq = key.dataset.frequency
			sound.play(freq);
		});

		window.addEventListener("keyup", (event) => {
			var sound = new Sound(context);
			sound.stop();
		});
	};

	document.addEventListener("DOMContentLoaded", (event) => {
		if (!piano) {
			playPiano()
		};
	});
