import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'
import PinterestLogo from '../../../static/fonts/pinterest-p-brands.svg'
import InstagramLogo from '../../../static/fonts/instagram-brands.svg'
import SearchLogo from '../../../static/fonts/search-solid.svg'

const Navigation = () => (
  <nav role='navigation' className={styles.navbar} aria-label='Main'>
    <div className={styles.social}>
        <a href="https://www.pinterest.com/laura_vha/">
          <img src={PinterestLogo} alt='Pinterest Logo' />
        </a>
        <a href="https://www.instagram.com/laura_vha/">
          <img src={InstagramLogo} alt='Instagram Logo' />
        </a>
    </div>
    <div className={styles.navigation}>
       <Link to='/kurse/' activeClassName='active' className={styles.navigationItem}>
          Mein Angebot
        </Link>
        <Link to='/' activeClassName='active' className={styles.navigationItem}>
          Blog
        </Link>
  
        </Link>
        <Link to='/about/' activeClassName='active' className={styles.navigationItem}>
          Über mich
        </Link>
      <Link to='/kontakt/' activeClassName='active' className={styles.navigationItem}>
          Kontakt
       
    </div>
    <div className={styles.search}>
        <img src={SearchLogo} alt='Search Logo' />
    </div>
  </nav>
)

export default Navigation
