import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import './styles.css'

const completed = todos => todos.filter(todo => todo.completed).length / todos.length

const Todo = ({ title, completed }) => (
  <div className={classNames('Project-042-project-todo', {completed})}>
    <span>{title}</span>
  </div>
)

const Collaborator = ({ avatar, name }) => (
  <img className="Project-042-project-collaborator" src={avatar} alt={name} />
)

const TodoProject = ({ title, collaborators, todos, open, toggleProject }) => (
  <div className={classNames('Project-042-project', {open})} onClick={toggleProject(title)}>
    <div className="Project-042-project-header">
      <div className="Project-042-project-collaborators">
        {collaborators.map((collaborator, i) => <Collaborator {...collaborator} key={i} />)}
      </div>
      <div className="Project-042-project-title">{title}</div>
    </div>
    <div className="Project-042-project-completion" data-completed={Math.floor(100*completed(todos))}>
      {Math.floor(100*completed(todos))}%
    </div>

    <div className="Project-042-project-close" />

    <div className="Project-042-project-todos">
      {todos.map((todo, i) => <Todo {...todo} key={i} />)}
    </div>
  </div>
)

const Project = ({ projects, currentProject, toggleProject }) => (
  <div className="Project-042">
    <div className="Project-042-container abs-center">
      <div className="Project-042-nav">Your Projects</div>

      <div className="Project-042-projects">
        {projects.map(project => <TodoProject
          {...project}
          open={project.title === currentProject}
          toggleProject={toggleProject}
          key={project.title}
        />)}
      </div>

      <div className="Project-042-add-button">+</div>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  projects: state['042'].projects,
  currentProject: state['042'].currentProject,
})

const mapDispatchToProps = (dispatch) => ({
  toggleProject: title => () => dispatch({ type: 'TOGGLE_TODO_PROJECT', title })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project)
