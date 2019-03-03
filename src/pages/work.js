import React from "react"
//import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { navy, lime, offWhite } from "../components/colors"

import WhitneyPortfolioGIF from "../images/whitneyportfolio.gif"
import TBG from "../images/tbg.png"

const Work = () => (
  <Layout>
    <SEO title="Work" />
    <div style={{ maxWidth: `1280px` }}>
      <Image />
    </div>
    <h1 style={{ textAlign: `center`, marginTop: `1em` }}>Outside Nine-to-Five Work</h1>
    {/* Yonder.Guide */}
    {/* Whiteny's site */}
    <section style={{ padding: `5rem 0`, background: `${navy}`, color: `${offWhite}` }}>
      <div style={{ display: `grid`, gridTemplateColumns: `10% 1fr 5% 1fr 10%` }}>
        <div />
        <div style={{ textAlign: `right` }}>
          <h2><a href="http://www.whitneyjenich.com" style={{ color: `${lime}`}}>Whitney's Portfolio</a></h2>
          <p>I was honored when good friend and fellow Creighton graduate, Whitney Jenich, asked me to develop her portfolio site.</p>
          <p>
            I thoroughly enjoyed working with such a talented designer and the project served as a great
            introduction to some new technologies. This was the first time I'd worked with designs made with Sketch.
            It was also the first site that I've made with Gatsby, which I've since come to appreciate enough to use for my own portfolio.
          </p>
        </div>
        <div />
        <div>
          <div style={{ width: `100%`, height: `100%`, backgroundImage: `url(${WhitneyPortfolioGIF})`, backgroundSize: `contain`, backgroundRepeat: `no-repeat`, backgroundPosition: `center` }} />
        </div>
        <div />
      </div>
    </section>
    {/* TBG site */}
    <section style={{ padding: `5rem 0`, background: `${offWhite}`, color: `${navy}` }}>
      <div style={{ display: `grid`, gridTemplateColumns: `10% 1fr 5% 1fr 10%` }}>
        <div />
        <div>
          <div style={{ width: `100%`, height: `100%`, backgroundImage: `url(${TBG})`, backgroundSize: `contain`, backgroundRepeat: `no-repeat`, backgroundPosition: `center` }} />
        </div>
        <div />
        <div style={{ textAlign: `left` }}>
          <h2><a href="http://www.tbgco.com" style={{ color: `${navy}`}}>The Benefit Group</a></h2>
          <p>The Benefit Group (TBG) is an Omaha based company that provides employee benefit packages for self funded employers.</p>
          <p>
            Paired up with designer, photographer, and freelancer-extraordinaire - <a href="http://www.bridgetmcquillan.com/" target="_blank" style={{ textDecoration: `underline`, color: `${navy}` }}> Bridget McQuillan
            </a> - I developed a custom WordPress theme of her design for the site.
            We worked hands on with the TBG marketing team to understand their goals with a new site and then determine the best design and technical solution attain them.
          </p>
        </div>
        <div />
      </div>
    </section>
    {/* Angular controllerAs syntax talk */}
    {/* Tornado Party Site */}
    {/* Conferences attended - React Rally - MidwestJS - NEJS Conf */}
    {/* Meetups - ngNebraska - NEJS - Mobile Meetup - NodeSchool */}
    {/* Non-Profit - OpenNebraska */}
  </Layout>
)

export default Work
