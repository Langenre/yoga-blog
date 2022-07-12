import * as React from "react"

import Seo from '../components/seo'
import Layout from '../components/layout'
import * as styles from './pages.module.css'
import PageHeader from '../components/page-header/page-header'


export default function Component (props) {
    return (
        <Layout location={props.location}>
            <Seo title="About me" />
            <PageHeader title="About" />
            <div className={styles.pager}>
                <div className={styles.article}>
                    <div
                    className={styles.body}
                    >
                       <p> Namasté </p>
                        <p> Schön, dass du da bist!</p>
                        
                        <p>Mein Name ist Laura und ich praktiziere seit 2018 regelmäßig Yoga. Meine Yogareise begann auf Youtube, als ich nach einer Trennung mit Videos von Mady Morrison meinem Körper etwas Gutes tun wollte </p>
                        <p> Schnell habe ich gemerkt, dass Yoga aber weit mehr kann, als mich gelenkiger zu machen. Je regelmäßiger ich praktizierter, desto mehr änderte sich für mich. </p>
                        <p> Und das nicht nur körperlich, sondern auch geistig. Ich lernte, mich zu spüren und meine Emotionen wahrzunehmen. Achtsamer mit mir zu sein. Mich zu akzeptieren, so wie ich bin. Alte Spannungen loszulassen. Yoga war für mich der erste Schritt auf einer Reise zu innerer Heilung. </p>
                        <p> Trotzdem liebe ich es auch, mich auf der Matte herauszufordern. Meinen Körper jedes Mal neu kennen zu lernen. Und zu beobachten, wie ich mich über die Jahre auf der Matte entwickle. </p>
                        <p> 2022 schloss ich schließlich meine Ausbildung zur Hatha-Yoga Lehrerin bei Yoga Vidya ab. So kann ich das, was ich auf der Matte erleben durfte, auch andere erleben lassen. </p>
                         <p> Ich glaube nämlich, dass wir viel mehr Yogis in dieser Welt brauchen und Achtsamkeit nicht nur zu innerem sondern auch äußerem Frieden führen kann. </p>   
                           <p> Darum möchte ich  auch dir die Vielseitigkeit und Heilsamkeit von Yoga zeigen. </p>
                        <p> In meinen Stunden lasse ich darum immer wieder kleine philosophische Impulse einfließen. Außerdem lege ich viel Wert auf Ausgeglichenheit zwischen Bewegung und Entspannung. </p>
                        <p> So möchte ich Yoga möglichst ganzheitlich vermitteln.</p>

                        <p> Ich freue mich, wenn ich dich bald in einer meiner Stunden begrüßen darf. </p>
                        <p> Schaue gerne in mein Kursangebot oder kontaktiere mich jederzeit, wenn du Fragen hast.</p>
                        <p> Ich freue mich auf dich! </p>
                           
    ´                    
                    </div>
                </div>
            </div>
        </Layout>
    )
}
