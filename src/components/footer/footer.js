import React from 'react'

import * as styles from './footer.module.css'
import { Link } from 'gatsby'

const Footer = () => (
    <div className={styles.footer}>
      <ul className={styles.footerList}>
        <li className={styles.footerItem}>
          <Link to='/impressum/' activeClassName='active'>
            Impressum
          </Link>
        </li>
        <li className={styles.footerItem}>
          <Link to='/datenschutz/' activeClassName='active'>
            Datenschutz
          </Link>
        </li>
        <li className={styles.footerItem}>
          <Link to='/kontakt/' activeClassName='active'>
            Kontakt
          </Link>
        </li>
      </ul>
    </div>
)

export default Footer
