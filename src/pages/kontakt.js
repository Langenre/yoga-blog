import * as React from "react"

import Seo from '../components/seo'
import Layout from '../components/layout'
import * as styles from './pages.module.css'
import PageHeader from '../components/page-header/page-header'


export default function Component (props) {
    return (
        <Layout location={props.location}>
            <Seo title="Contact" />
            <PageHeader title="Kontakt" />
            <div className={styles.pager}>
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
