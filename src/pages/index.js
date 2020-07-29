import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const content = data.allMarkdownRemark.edges
  const sites = content.filter(({ node }) =>
    node.parent.dir.includes("content/sites")
  )

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 row-gap-16">
        {sites.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const icon = node.frontmatter.icon || false
          return (
              <article
                className="overflow-hidden rounded shadow-lg flex flex-col bg-white"
                key={node.fields.slug}
              >
                <Link to={node.fields.slug} className="flex-1 shadow-none">
                  <div className="px-6 py-6">
                    <header>
                      <div class="mb-3">
                        <img
                          src={icon}
                          style={{ height: '50px' }}
                          alt={`${title} Icon`}
                        />
                      </div>
                      <h3 className="font-bold text-2xl">
                        {title}
                      </h3>
                    </header>
                    <section className="mt-4">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </section>
                  </div>
                </Link>
              </article>
          )
        })}
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [fields___slug], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            cosmicapplink
            icon
          }
          parent {
            ... on File {
              dir
            }
          }
        }
      }
    }
  }
`
