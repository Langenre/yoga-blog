import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'
import PinterestLogo from '../../../static/fonts/pinterest-p-brands.svg'
import InstagramLogo from '../../../static/fonts/instagram-brands.svg'

const Navigation = () => (
  <nav role='navigation' className={styles.container} aria-label='Main'>
    <div className={styles.social}>
      <a href="https://www.pinterest.com/laura_vha/">
        <img src={PinterestLogo} alt='Pinterest Logo' />
      </a>
      <a href="https://www.instagram.com/laura_vha/">
        <img src={InstagramLogo} alt='Instagram Logo' />
      </a>
    </div>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to='/' activeClassName='active'>
          Blog
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to='/about/' activeClassName='active'>
          Über mich
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to='/kontakt/' activeClassName='active'>
          Kontakt
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to='/kurse/' activeClassName='active'>
          Kurse
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
