import React from 'react'
import PropTypes from 'prop-types'
// import Helmet from `react-helmet`
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Fuel Copy</h1>
    <p>Welcome to site made from sadness.</p>
    <p>We'll help you get there.</p>
    <div style={{ maxWidth: `600px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">Learn about us.</Link>
  </Layout>
)

export default IndexPage