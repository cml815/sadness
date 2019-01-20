import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="About Fuel Copy" />
    <h1>Hi from the About Page</h1>
    <p>Welcome the about page.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
