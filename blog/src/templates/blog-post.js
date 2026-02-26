import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const BlogPost = ({ data }) => {
  const { title, heroImage, body } = data.contentfulBlogPost

  return (
    <Layout>
      <h1>{title}</h1>

      {heroImage?.gatsbyImageData && (
        <GatsbyImage image={heroImage.gatsbyImageData} alt={title} />
      )}

      <div
        dangerouslySetInnerHTML={{
          __html: body.childMarkdownRemark.html,
        }}
      />
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      heroImage {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 900)
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`