import * as React from "react"

import Seo from '../components/seo'
import Layout from '../components/layout'
import * as styles from './pages.module.css'
import PageHeader from '../components/page-header/page-header'


export default function Component (props) {
  return (
    <Layout location={props.location}>
      <Seo title="Datenschutz" />
      <PageHeader title="Datenschutz" />
      <div className={styles.pager}>
        <div className={styles.article}>
          <div
            className={styles.body}
          >
            <p>Text</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
