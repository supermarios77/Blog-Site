import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>A Blog Website Made With Gatsby.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://www.allrecipes.com/thmb/GsldgnTeewAv5eEqoxQ7E1iAKO8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/157877-vanilla-cupcakes-ddmfs-2X1-0399-1b671dfd598548b1b0339076d062a758.jpg"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
