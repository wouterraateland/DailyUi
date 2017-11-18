import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import './styles.css'

const Project = ({dragging, images, onDrag, onDragEnd, onDrop}) => (
  <div className="Project-031">
    <div
      className={classNames('Project-031-container', 'abs-center', 'shadow', {dragging})}
      onDragEnter={onDrag}
      onDragOver={onDrag}
      onDragEnd={onDragEnd}
      onDragLeave={onDragEnd}
      onDrop={onDrop}
    >
      <div className="Project-031-image-container">
        {images.map(({id, image, uploaded}, i) => (
          <div
            key={id}
            className={classNames('Project-031-image', {uploaded})}
            style={{
              left: `${18 * ((i + dragging) % 3)}vmin`,
              top: `${14 * Math.floor((i + dragging) / 3)}vmin`,
              backgroundImage: `url(${image})`,
            }} />
        ))}
      </div>
      <div className="Project-031-placeholder">

      </div>
    </div>
  </div>
)

const preventEvent = f => event => {
  event.preventDefault()
  event.stopPropagation()
  f(event)
}

const mapStateToProps = (state) => ({
  images: state['031'].images,
  dragging: state['031'].dragging,
})

const mapDispatchToProps = (dispatch) => ({
  onDrag:    preventEvent(() => dispatch({ type: 'SET_DRAGGING_ACTIVE', active: true })),
  onDragEnd: preventEvent(() => dispatch({ type: 'SET_DRAGGING_ACTIVE', active: false })),
  onDrop:    preventEvent((event) => dispatch({
               type: 'DROP_FILE_REQUEST',
               files: event.dataTransfer.files,
             })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project)
