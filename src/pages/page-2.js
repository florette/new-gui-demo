import React from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from "../components/layout"

import AUbutton from '@gov.au/buttons';

const SecondPage = ({ data }) => (
    <Layout>
    <div className="banner__container">
        <Img fixed={data.strapiBanner.Image.childImageSharp.fixed} />
    </div>
    <div className="container-fluid banner__text">
        <div className="row">
            <div className="col-xs-12 col-sm-6">
                <h2>{data.strapiBanner.Heading}</h2>
                <p>{data.strapiBanner.Sub_heading}</p>
                <p>
                    <AUbutton link={data.strapiBanner.CTA_link}>{data.strapiBanner.CTA_text}</AUbutton>
                </p>
            </div>
        </div>
    </div>
    <section className="au-body">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h2>Other highlighted content</h2>

                    <p>Nullam sollicitudin orci neque, ut condimentum ipsum blandit eu. Praesent eu sagittis elit.</p>

                    <p>Nullam ut nibh sed nunc molestie faucibus. Integer pulvinar sapien in porta fringilla. Cras et velit fermentum, pretium lacus gravida, egestas mauris. Explain some important information upfront, what is the product or service. What is the role of it. How does the user get started using it. Keep this text simple and informative.</p>
                </div>
            </div>
        </div>
    </section>
  </Layout>
)

export default SecondPage

export const pageQuery = graphql`  
  query SecondPageQuery {
    strapiBanner(id: {eq: "Banner_2"}) {
        id
        Heading
        Sub_heading
        Image {
            childImageSharp {
                fixed(width: 1920, height: 342) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        CTA_text
        CTA_link
    }
}
`
