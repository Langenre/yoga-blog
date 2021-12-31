import React from 'react'

import * as styles from './footer.module.css'

const Footer = () => (
    <div className={styles.footer}>
      <ul className={styles.footerList}>
        <li className={styles.footerItem}>Impressum</li>
        <li className={styles.footerItem}>Datenschutz</li>
        <li className={styles.footerItem}>Kontakt</li>
      </ul>
    </div>
)

export default Footer
