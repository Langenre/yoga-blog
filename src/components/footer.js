import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Technische Umsetzung durch Rene Langenberger
    </div>
  </Container>
)

export default Footer
