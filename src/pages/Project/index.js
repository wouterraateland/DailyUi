import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

// Components
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import Project from 'components/Project'
import ProjectThumb from 'components/ProjectThumb'
import Footer from 'components/Footer'

import {
  ShareButtons,
  generateShareIcon
} from 'react-share'

// Data
import {
  getProjectNumberByURL,
  getProjectIdByURL,
  getProjectTitleByURL,
  getProjectPublishedByURL,
} from 'selectors/projects'

const {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  PinterestShareButton,
} = ShareButtons

const FacebookIcon = generateShareIcon('facebook')
const TwitterIcon = generateShareIcon('twitter')
const LinkedinIcon = generateShareIcon('linkedin')
const WhatsappIcon = generateShareIcon('whatsapp')
const PinterestIcon = generateShareIcon('pinterest')

const ProjectPage = ({ projectId, number, title, published, ...rest }) => (
  <div className="ProjectPage page">
    <Helmet>
      <title>DailyUi #{number} — {title}</title>
      <meta name="description" content={`Day ${number}/100 of the DailyUi challenge by Wouter Raateland.`} />

      <meta itemprop="name" content={`DailyUi #${number} — ${title}`} />
      <meta itemprop="description" content={`${title} — Day ${number}/100 of the DailyUi challenge by Wouter Raateland.`} />
      <meta itemprop="image" content={`${process.env.PUBLIC_URL}/thumbs/DailyUi-${number}.jpg`} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@wouterraateland" />
      <meta name="twitter:title" content={`DailyUi #${number} — ${title}`} />
      <meta name="twitter:description" content={`${title} — Day ${number}/100 of the DailyUi challenge by Wouter Raateland.`} />
      <meta name="twitter:creator" content="@wouterraateland" />
      <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/thumbs/DailyUi-${number}.jpg`} />

      <meta property="og:type" content="article" />
      <meta property="og:image" content={`${process.env.PUBLIC_URL}/thumbs/DailyUi-${number}.jpg`} />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:alt" content={`DailyUi #${number} — ${title}`} />
      <meta property="og:title" content={`DailyUi #${number} — ${title}`} />
      <meta property="og:description" content={`Day ${number}/100 of the DailyUi challenge by Wouter Raateland.`} />
      <meta property="og:url" content={`https://dailyui.wouterraateland.nl/project/${number}`} />
      <meta property="og:site_name" content="Wouter Raateland - DailyUi" />
      <meta property="article:author" content="Wouter Raateland" />
    </Helmet>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html:
`{
  "@context": "http://schema.org",
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://google.com/article"
  },
  "headline": "DailyUi #${number} — ${title}",
  "image":[
    "${process.env.PUBLIC_URL}/thumbs/DailyUi-${number}.jpg"
  ],
  "datePublished": "${published}",
  "dateModified": "${published}",
  "publisher": {
  	"@type": "Organization",
    "name": "Wouter Raateland Webdesign",
    "logo": {
      "@type": "ImageObject",
      "url": "${process.env.PUBLIC_URL}/logo.png"
    }
  },
  "author": {
  	"@type": "Person",
    "name": "Wouter Raateland"
  },
  "description": "Day ${number}/100 of the DailyUi challenge by Wouter Raateland."
}`
    }} />
    <div className="ProjectPage-header">
      <Link className="ProjectPage-back alignleft" to="/"></Link>
      <label className="ProjectPage-share-container alignright">
        <input className="hidden" type="checkbox" />
        <div className="ProjectPage-share" />
        <FacebookShareButton className="ProjectPage-share-button"
          url={`https://dailyui.wouterraateland.nl/project/${number}`}
          quote={`${title} — Day ${number}/100 of the DailyUi challenge by Wouter Raateland.`}>
          <FacebookIcon size="5vmin" />
        </FacebookShareButton>
        <TwitterShareButton className="ProjectPage-share-button"
          url={`https://dailyui.wouterraateland.nl/project/${number}`}
          title={`${title} — Day ${number}/100 of the DailyUi challenge by Wouter Raateland.`}>
          <TwitterIcon size="5vmin" />
        </TwitterShareButton>
        <LinkedinShareButton className="ProjectPage-share-button"
          url={`https://dailyui.wouterraateland.nl/project/${number}`}
          title={`DailyUi #${number} — ${title}`}>
          <LinkedinIcon size="5vmin" />
        </LinkedinShareButton>
        <WhatsappShareButton className="ProjectPage-share-button"
          url={`https://dailyui.wouterraateland.nl/project/${number}`}
          title={`${title} — Day ${number}/100 of the DailyUi challenge by Wouter Raateland.`}
          separator=" ">
          <WhatsappIcon size="5vmin" />
        </WhatsappShareButton>
        <PinterestShareButton className="ProjectPage-share-button"
          url={`https://dailyui.wouterraateland.nl/project/${number}`}
          media={`${process.env.PUBLIC_URL}/thumbs/DailyUi-${number}.jpg`}
          description={`${title} — Day ${number}/100 of the DailyUi challenge by Wouter Raateland.`}>
          <PinterestIcon size="5vmin" />
        </PinterestShareButton>
      </label>
      <h1 className="ProjectPage-title">#{number} &mdash; {title}</h1>
    </div>
    <div className="ProjectPage-container">
      <Project projectId={projectId} {...rest} />
    </div>
    <div className="ProjectPage-nav">
      <div className="row">
        <div className="ProjectPage-nav-link col-6">
          <ProjectThumb projectId={projectId - 1}/>
        </div>
        <div className="ProjectPage-nav-link col-6">
          <ProjectThumb projectId={projectId + 1}/>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  projectId: getProjectIdByURL(state, ownProps),
  title: getProjectTitleByURL(state, ownProps),
  number: getProjectNumberByURL(state, ownProps),
  published: getProjectPublishedByURL(state, ownProps),
})

export default connect(
  mapStateToProps
)(ProjectPage)
