import React from "react"
import Layout from "../components/layout";


const bookTemplate = (props) => {
     console.log("===props===",props)
     return (
          <Layout>
               <section>
                    {/* <h2>{props.pageContext.title} - <small>{props.pageContext.author.name}</small></h2> */}
               </section>
          </Layout>
     )
}
export default bookTemplate;