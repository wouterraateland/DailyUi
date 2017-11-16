import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import './styles.css'

const toolNames = ['brush', 'marker', 'pencil', 'eraser']

const Project = ({ open, tools, currentTool, onToolClick }) => (
  <div className="Project-027">
    <div className={classNames('Project-027-tool-picker', 'abs-center', {open})}>
      <div
        className="Project-027-tools"
        style={{marginTop: `-${10*toolNames.indexOf(currentTool)}em`}}
      >
        {tools.map(({name, image}) => (
          <div
            className={classNames('Project-027-tool', {current: currentTool === name})}
            key={name}
            onClick={onToolClick(name)}>
            <img className="Project-027-tool-illustration" src={image} alt={name} />
          </div>
        ))}
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  tools: state['027'].tools,
  currentTool: state['027'].currentTool,
  open: state['027'].open,
})

const mapDispatchToProps = (dispatch) => ({
  onToolClick: (name) => () => dispatch({ type: 'CLICK_TOOL', tool: name }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project)
