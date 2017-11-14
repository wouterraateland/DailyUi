import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import './styles.css'

import avatar from 'media/avatars/wouter.jpg'

import inception from './media/inception.jpg'
import blackSwan from './media/black-swan.jpg'
import captainFantastic from './media/captain-fantastic.jpg'
import windRiver from './media/wind-river.jpg'

const Project = ({ categories, movies }) => (
  <div className="Project-025">
    <div className="Project-025-container abs-center shadow">
      <div className="Project-025-hamburger"></div>
      <div className="Project-025-meta">
        <img className="Project-025-avatar" src={avatar} alt="Wouter Raateland" />
        <div className="Project-025-datetime">
          <div className="Project-025-time">4:38</div>
          <div className="Project-025-date">Monday 13th</div>
        </div>
      </div>
      <div className="Project-025-main">
        <div className="Project-025-nav">
          {categories.map(({name, selected}) => (
            <div className={classNames('Project-025-nav-item', {selected})} key={name}>{name}</div>
          ))}
        </div>
        <div className="Project-025-movies">
          {movies.map(({
            title, image, length, genre, rating, description, director,
            selected, backgroundColor, color
          }) => (
            <div
              className={classNames('Project-025-movie', {selected})}
              key={title}
              style={{backgroundColor,color}}
            >
              <div
                className="Project-025-movie-cover"
                style={{backgroundImage:`url(${image})`}} />
              <div
                className="Project-025-movie-info"
                style={{boxShadow: `0 0 4vmin 2vmin ${backgroundColor}`}}
              >
                <h2 className="Project-025-movie-title">{title}</h2>
                <div className="Project-025-movie-meta">{length}min - {genre} - {rating}/10</div>
                <p className="Project-025-movie-description">{description}</p>
                <div className="Project-025-movie-director">Directed by: {director}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="Project-025-action">
        <div className="Project-025-action-button">OK</div>
        <div className="Project-025-action-description">More information</div>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  categories: [
    { name: 'Suggestions', selected: true },
    { name: 'New In', selected: false },
    { name: 'Action', selected: false },
    { name: 'Thriller', selected: false },
    { name: 'Comedy', selected: false }
  ],
  movies: [
    {
      title: 'Black Swan',
      image: blackSwan,
      length: 108,
      genre: 'Thriller',
      rating: '8.0',
      description: 'A committed dancer wins the lead role in a production of Tchaikovsky\'s "Swan Lake" only to find herself struggling to maintain her sanity.',
      director: 'Darren Aronofsky',
      backgroundColor: '#eef3f6',
      color: '#a34197',
      selected: true,
    },
    {
      title: 'Captain Fantastic',
      image: captainFantastic,
      length: 118,
      genre: 'Drama',
      rating: '7.9',
      description: 'In the forests of the Pacific Northwest, a father devoted to raising his six kids with a rigorous physical and intellectual education is forced to leave his paradise and enter the world, challenging his idea of what it means to be a parent.',
      director: 'Matt Ross',
      backgroundColor: '#fdf1c9',
      color: '#369b8e',
    },
    {
      title: 'Inception',
      image: inception,
      length: 148,
      genre: 'Thriller',
      rating: '8.8',
      description: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
      director: 'Christopher Nolan',
      backgroundColor: '#173b48',
      color: '#de2a28',
    },
    {
      title: 'Wind River',
      image: windRiver,
      length: 111,
      genre: 'Crime',
      rating: '7.8',
      description: 'A veteran tracker with the Fish and Wildlife Service helps to investigate the murder of a young Native American woman, and uses the case as a means of seeking redemption for an earlier act of irresponsibility which ended in tragedy.',
      director: 'Taylor Sheridan',
      backgroundColor: '#fdfdfe',
      color: '#254366',
    },
  ],
})

export default connect(
  mapStateToProps,
)(Project)
