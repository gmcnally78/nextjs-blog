// Add this import at the top of the file
import utilStyles from '../../styles/utils.module.css'
// Add this import
import Date from '../../components/date'
// Add this import
import Head from 'next/head'

import Layout from '../../components/layout'

import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id)
  // ...
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
     <Head>
        <title>{postData.title}</title>
      </Head>
       <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      {postData.title}
      <br />
      {postData.id}
      <br />
       <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}