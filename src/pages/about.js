import * as React from "react"

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import * as styles from '../templates/blog-post.module.css'


export default function Component (props) {
    return (
        <Layout location={props.location}>
            <Seo title="About me" />
            <Hero title="Laura von Harten" />
            <div className={styles.container}>
                <span className={styles.meta}>
                    Om Shanti Om
                </span>
                <div className={styles.article}>
                    <div
                    className={styles.body}
                    >
                        <p>Namasté</p>
                        <p>Ich bin Laura und habe mich auf die Reise zur Yogalehrerin begeben. Voraussichtlich werde ich im Janaur meine Ausbildung (BYV) im Seminarhaus Bad Meinberg abschließen.</p>
                        <p>Für mich ist Yoga [...]</p>
                        <p>Die Faszination für [...] lasse ich in meine persönliche Yogaübungspraxis einfließen.</p>
                        <p>Mein Leitgedanke ist [...]</p>
                        <p>Meinen Schülern möchte ich [...] mitgeben.</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
