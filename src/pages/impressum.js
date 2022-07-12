import * as React from "react"

import Seo from '../components/seo'
import Layout from '../components/layout'
import * as styles from './pages.module.css'
import PageHeader from '../components/page-header/page-header'


export default function Component (props) {
  return (
    <Layout location={props.location}>
      <Seo title="Impressum" />
      <PageHeader title="Impressum" />
      <div className={styles.pager}>
        <div className={styles.article}>
          <div
            className={styles.body}
          >
            <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
            <p>Laura von Harten<br />
              Allerstr. 10<br />
              
              38106 Braunschweig</p>

            <h2>Kontakt</h2>
            <p>Telefon: 0172 2400588<br />
             
              E-Mail: l.v.harten@gmx.de</p>

          

            <p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>          </div>
        </div>
      </div>
    </Layout>
  )
}
