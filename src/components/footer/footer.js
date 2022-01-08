import React from 'react'

import * as styles from './footer.module.css'
import { Link } from 'gatsby'

const Footer = () => (
  <>
    <div className={styles.newsletter}>
      Newsletter
    </div>
    <div className={styles.footer}>
      <Link to='/impressum/' activeClassName='active' className={styles.footerItem}>
        Impressum
      </Link>
      <Link to='/datenschutz/' activeClassName='active' className={styles.footerItem}>
        Datenschutz
      </Link>
      <Link to='/kontakt/' activeClassName='active' className={styles.footerItem}>
        Kontakt
      </Link>
    </div>
  </>
)

export default Footer
