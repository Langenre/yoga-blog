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
            <p>Max Mustermann<br />
              Musterstra&szlig;e 111<br />
              Geb&auml;ude 44<br />
              90210 Musterstadt</p>

            <h2>Kontakt</h2>
            <p>Telefon: +49 (0) 123 44 55 66<br />
              Telefax: +49 (0) 123 44 55 99<br />
              E-Mail: mustermann@musterfirma.de</p>

            <h2>Redaktionell verantwortlich</h2>
            <p>Beate Beispielhaft<br />
              Musterstra&szlig;e 110<br />
              90210 Musterstadt</p>

            <p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>          </div>
        </div>
      </div>
    </Layout>
  )
}
