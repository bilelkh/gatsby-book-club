import React from "react"
import { Link, graphql } from 'gatsby';


import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";


export const query = graphql`
{
 allBook {
    edges {
      node {
        id
        summary
        title
        author {
          name
        }
      }
    }
  }
}
`
const IndexPage = (props) => {
  return (
    <Layout>
      {props.data.allBook.edges.map(edge => (
        <div key={edge.node.id}>
          <h2>
            {edge.node.title} - {edge.node.author.name}
          </h2>
          <div>
            {edge.node.summary}
          </div>
          <Link to={`/book/${edge.node.id}`}>Join conversation
          </Link>
        </div>
      ))}
    </Layout>
  );
}
export default IndexPage
