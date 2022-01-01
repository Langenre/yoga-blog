import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './blog-post-header.module.css'

const BlogPostHeader = ({ image, title, author, date, timeToRead }) => (
  <div className={styles.header}>
    {image && (
        <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {author && date && timeToRead && <p>{author} – {new Date(date).toLocaleDateString('de-DE')} – {timeToRead} Minuten Lesezeit</p>}
    </div>
  </div>
)

export default BlogPostHeader
