import * as React from "react"

import Seo from '../components/seo'
import Layout from '../components/layout'
import * as styles from '../templates/blog-post.module.css'
import PageHeader from '../components/page-header'


export default function Component (props) {
    return (
        <Layout location={props.location}>
            <Seo title="About me" />
            <PageHeader title="Kurse" />
            <div className={styles.pager}>
                <span className={styles.meta}>
                    Om Namah Shivaya Gurave
                </span>
                <div className={styles.article}>
                    <div
                    className={styles.body}
                    >
                        <p>Die ersten Kurse folgen in 2022</p>
                        <p>Mein Plan ist es [...]</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
