import Head from "next/head";
import React from "react";
import { gql } from "@apollo/client";
import client from "@/apolloClient";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home({ streams }) {
  return (
    <div>
      
      <Head>
        <title>Pure Life Lab</title>
        <meta name="description" content="Health Blog" />
        <meta name="p:domain_verify" content="e7a0021487751868cfb3ab919d1ad94e"/>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Kay+Pho+Du&family=Libre+Baskerville:wght@700&family=Lilita+One&family=Playfair+Display:ital,wght@1,600&family=Source+Code+Pro:ital,wght@1,300;1,900&family=Titillium+Web:wght@900&display=swap" rel="stylesheet"/>

      </Head>
      
      {/* Components */}
      <Nav />
      
      {/* Line Breaks */}
      <br />
      <br />
      <br />
      <br />
      <h3 className="flex justify-center bg-[#047c85] ml-14 mr-14 rounded-xl font-custom-des text-[20px] text-white xl:ml-24 xl:mr-24">Featured Posts</h3>

      
      {/* Rendering Data */}

      <div className="ml-3 mr-3 scroll-py-5 xl:text-center">
        <ul>
          {streams.map((stream, i) => (
            <li
              className="xl:w-[30%] xl:inline-block xl:ml-2 py-5 px-5 border-solid border-4 border-[#d2cfde] bg-gray-300 hover:bg-[#d9d1ff] mt-3  rounded"
              key={i}
            >
              <a href={`/page/${stream.slug}`}>
                <img
                  src={stream.coverImage.url}
                  alt={`${stream.title} Cover Image`}
                  width="1000 px"
                  className="rounded xl:w-[500px]"
                />
                <p className="text-[#e16d00] font-bold text-[12px] xl:text-left">
                  Publish Date:- {stream.publishDate}
                </p>
                <p className="border-solid border-2  w-[25%] text-center rounded-xl bg-[#8676d6] border-[#7d64f9] text-white font-bold text-[12px]">{stream.articleCategory}</p>
                
                <h1 className="text-[20px] font-custom-title font-bold text-[#5d46d4]  xl:text-left">
                  {stream.title}{" "}
                </h1>
                <p className="xl:text-left font-custom-des text-[13px] italic hover:text-[#5d46d4] ease-in-out duration-300">{stream.frontdes}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
}

{
  /* Graph CMS Code */
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        streams {
          title
          slug
          publishDate
          frontdes
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
  });

  const { streams } = data;
  return {
    props: {
      streams,
    },
  };
}
