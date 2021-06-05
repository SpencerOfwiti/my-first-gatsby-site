import * as React from 'react'
import Layout from '../components/layout'
import { heading } from '../components/layout.module.css'

const IndexPage = () => {
  return (
      <Layout pageTitle={'Home Page'}>
          <h1>
              Welcome
              <br />
              <span className={heading}>— to my Gatsby site! </span>
              <span role="img" aria-label="Party popper emojis">
                  🎉🎉🎉
              </span>
          </h1>
          <p>
              I am making this by following the Gatsby Tutorial.
              <span role="img" aria-label="Sunglasses smiley emoji">
                  😎
              </span>
          </p>
      </Layout>
  )
}

export default IndexPage
