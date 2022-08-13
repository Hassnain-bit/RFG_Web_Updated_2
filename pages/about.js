import React from 'react'
// import Head from "next/document";


import Navbar from '../components/Common/Navbar'
import {
  Title,
  Logistics,
  Description,
  Profile,
   
} from "../components/Aboutpage/index";
import styles from "../styles/Aboutpage/index.module.scss";

import RequestQuote from '../components/Common/requestQuote';
import Footer from '../components/Common/footer';
 
function about() {
  return (
    <>
    {/* <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
     
      </Head> */}
        {/* <Navbar/> */}
        <section className={styles.about_us}>
        <Title />
        <Description />
        <Profile />
        <Logistics />
        <RequestQuote />
        <Footer />
      </section>
    </>
  )
}

export default about