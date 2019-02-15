// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .


// Create the audio context

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// Initialize Sound class

class Sound {

  constructor(audioCtx) {
    this.audioCtx = audioCtx;
  }

  setup() {
    this.oscillator = this.audioCtx.createOscillator();
    this.gainNode = this.audioCtx.createGain();

    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioCtx.destination);
    this.oscillator.type = 'sine';
  }

  play(value) {
    this.setup();
    this.oscillator.frequency.value = value;
    this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
    this.gainNode.gain.linearRampToValueAtTime(1, this.audioCtx.currentTime + 0.01);
    this.oscillator.start(audioCtx.currentTime);
    this.stop(this.audioCtx.currentTime);

  }

  stop() {
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 1);
    this.oscillator.stop(this.audioCtx.currentTime + 1);
  }

}
