import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NewPage = () => (
    <Layout>
        <SEO title="New page." />
        <h1>I'm new page</h1>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)
export default NewPage
