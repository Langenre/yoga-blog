import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Konzeption, Design und technische Umsetzung: Mein Freund
    </div>
  </Container>
)

export default Footer
