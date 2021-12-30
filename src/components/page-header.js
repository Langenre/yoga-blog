import React from 'react'

import * as styles from './page-header.module.css'

const PageHeader = ({ title }) => (
  <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
  </div>
)

export default PageHeader
