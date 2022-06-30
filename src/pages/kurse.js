import * as React from "react"

import Seo from '../components/seo'
import Layout from '../components/layout'
import * as styles from './pages.module.css'
import PageHeader from '../components/page-header/page-header'
import get from 'lodash/get'
import { graphql } from 'gatsby'


class Courses extends React.Component {
  render() {
    const courses = get(this, 'props.data.allContentfulCourses.nodes')

    return (
          <Layout location={this.props.location}>
              <Seo title="About me" />
              <PageHeader title="Kurse" />
              <div className={styles.pager}>
                  <div className={styles.article}>
                      <div
                      className={styles.body}
                      >
                          <p>Die ersten Kurse folgen in 2022</p>
                          {courses.map(course => (
                            <div>
                              <h1>{course.title}</h1>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: course.description.childMarkdownRemark.html,
                                }}
                              />
                            </div>
                          ))}
                      </div>
                  </div>
              </div>
          </Layout>
      )
  }
}

export default Courses;

export const pageQuery = graphql`
  query CourseQuery {
    allContentfulCourses(sort: { fields: [title], order: DESC}) {
      nodes {
        title
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
