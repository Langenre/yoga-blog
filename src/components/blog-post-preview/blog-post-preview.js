import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Tags from '../tags/tags'
import * as styles from './blog-post-preview.module.css'

const BlogPostPreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <div className={styles.container}>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className={styles.link}>
                <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} />
              </Link>
              <div className={styles.articlePreview}>
              <Link to={`/blog/${post.slug}`} className={styles.link}>
              <h2 className={styles.title}>{post.title}</h2>
              </Link>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.description.childMarkdownRemark.html,
                }}
                className={styles.description}
              />
              <div className={styles.meta}>
                <small className="meta">{post.publishDate}</small>
                <Tags tags={post.tags} />
              </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BlogPostPreview
