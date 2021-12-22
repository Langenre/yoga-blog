import * as React from "react"

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import * as styles from '../templates/blog-post.module.css'


export default function Component (props) {
    return (
        <Layout location={props.location}>
            <Seo title="Contact" />
            <Hero title="Kontakt" />
            <div className={styles.pager}>
                <span className={styles.meta}>
                    Wer die anderen als Weise erkennt, wird sich selbst als Erleuchtet wissen
                </span>
                <div className={styles.article}>
                    <div
                    className={styles.body}
                    >
                        <p>Falls ihr zu Themen mehr erfahren, oder euch austauschen wollt, kommt gerne auf mich zu. Ich möchte an euren Erfahrungen teilhaben.</p>
                        <p>Vorallem interessieren mich [...]</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
