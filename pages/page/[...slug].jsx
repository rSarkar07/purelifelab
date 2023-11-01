import React from 'react'
import { gql } from '@apollo/client'
import client from '@/apolloClient'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'


export default function StreamPage({ stream }) {
  return (

    <div>
      <Nav />
      <br />
      <br />
      <br />
      <br />
      
      <div className='px-5'>
        <h1 className='font-bold text-4xl font-custom-title xl:ml-24'>{stream.title}</h1> <br />
        <img className=' rounded w-[350px] h-[250] xl:ml-24 xl:w-[800px]' src={stream.coverImage.url} alt={`${stream.title} Cover Image`} /> <br />
        <div className=' px-6 text-left font-custom-content text-[20px] xl:ml-24 xl:mr-24' dangerouslySetInnerHTML={{ __html: stream.description.html }} />
      </div>
      <Footer />
    </div>
  )
}


export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
        query {
          streams {
            slug
          }
        }
        `
  })

  const { streams } = data;

  const paths = streams.map(stream => ({
    params: { slug: [stream.slug] }
  }))
  console.log(paths)
  return { paths, fallback: false };
}


export async function getStaticProps({ params }) {
  const slug = params.slug[0]
  const { data } = await client.query({
    query: gql`
        query Stream($slug: String!) {
          streams (where: {slug : $slug}) {
            title
            slug
            publishDate
            coverImage {
              url
            }
            articleCategory
            description {
              raw
              html
            }
          }
        }
        `,
    variables: { slug }
  })

  const { streams } = data;
  const stream = streams[0];

  return { props: { stream } }
}