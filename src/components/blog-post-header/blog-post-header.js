import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './blog-post-header.module.css'

const BlogPostHeader = ({ image, title, content }) => (
  <div className={styles.header}>
    {image && (
        <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && <p className={styles.content}>{content}</p>}
    </div>
  </div>
)

export default BlogPostHeader
