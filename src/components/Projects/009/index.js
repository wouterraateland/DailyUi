import React from 'react'
import Tone from 'tone'
import './styles.css'

// const synth = new Tone.Synth().toMaster()

const synth = new Tone.PolySynth(6, Tone.Synth, {
	"oscillator" : {
		"partials" : [0, 2, 3, 4],
	}
}).toMaster();

let started = false
const setState = v => () => { started = v }

const play = (tone, force) => (e) => {
  if (started || force) {
    const el = document.createElement('div')
    el.className = 'note'
    e.target.appendChild(el)
    synth.triggerAttack(tone)
  }
}

const pause = tone => () => {
  synth.triggerRelease(tone)
}

const Project = () => (
  <div className="Project-009" onMouseDown={setState(true)} onMouseUp={setState(false)}>
    <div className="Project-009-container abs-center">
      <div className="Project-009-key white" onMouseEnter={play('C4')} onMouseDown={play('C4', true)} onMouseLeave={pause('C4')} onMouseUp={pause('C4')}>C</div>
      <div className="Project-009-key black" onMouseEnter={play('C#4')} onMouseDown={play('C#4', true)} onMouseLeave={pause('C#4')} onMouseUp={pause('C#4')}>C#</div>
      <div className="Project-009-key white" onMouseEnter={play('D4')} onMouseDown={play('D4', true)} onMouseLeave={pause('D4')} onMouseUp={pause('D4')}>D</div>
      <div className="Project-009-key black" onMouseEnter={play('D#4')} onMouseDown={play('D#4', true)} onMouseLeave={pause('D#4')} onMouseUp={pause('D#4')}>D#</div>
      <div className="Project-009-key white" onMouseEnter={play('E4')} onMouseDown={play('E4', true)} onMouseLeave={pause('E4')} onMouseUp={pause('E4')}>E</div>
      <div className="Project-009-key white" onMouseEnter={play('F4')} onMouseDown={play('F4', true)} onMouseLeave={pause('F4')} onMouseUp={pause('F4')}>F</div>
      <div className="Project-009-key black" onMouseEnter={play('F#4')} onMouseDown={play('F#4', true)} onMouseLeave={pause('F#4')} onMouseUp={pause('F#4')}>F#</div>
      <div className="Project-009-key white" onMouseEnter={play('G4')} onMouseDown={play('G4', true)} onMouseLeave={pause('G4')} onMouseUp={pause('G4')}>G</div>
      <div className="Project-009-key black" onMouseEnter={play('G#4')} onMouseDown={play('G#4', true)} onMouseLeave={pause('G#4')} onMouseUp={pause('G#4')}>G#</div>
      <div className="Project-009-key white" onMouseEnter={play('A4')} onMouseDown={play('A4', true)} onMouseLeave={pause('A4')} onMouseUp={pause('A4')}>A</div>
      <div className="Project-009-key black" onMouseEnter={play('A#4')} onMouseDown={play('A#4', true)} onMouseLeave={pause('A#4')} onMouseUp={pause('A#4')}>A#</div>
      <div className="Project-009-key white" onMouseEnter={play('B4')} onMouseDown={play('B4', true)} onMouseLeave={pause('B4')} onMouseUp={pause('B4')}>B</div>
    </div>
  </div>
)

export default Project
