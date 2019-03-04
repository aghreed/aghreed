import React from "react"
//import { Link } from "gatsby"
import Image3 from "../components/image3"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { navy, lime, offWhite } from "../components/colors"

import WhitneyPortfolioGIF from "../images/whitneyportfolio.gif"
import YonderGuide from "../images/yonderguide.png"
import TBG from "../images/tbg.png"

const Side = () => (
  <Layout>
    <SEO title="Side" />
    <div style={{ maxWidth: `1280px`, margin: `0 auto` }}>
      <Image3 />
    </div>
    <h1 style={{ textAlign: `center`, marginTop: `1em`, color: `${navy}`, fontVariant: `small-caps` }}>on the side</h1>
    {/* Yonder.Guide */}
    <section style={{ padding: `5rem 0`, background: `${offWhite}`, color: `${navy}` }}>
      <div style={{ display: `grid`, margin: `0 7rem`, gridTemplateColumns: `5fr 3fr`, gridColumnGap: `2rem`, justifyContent: `space-around` }}>
        <div style={{ justifySelf: `end`, width: `100%` }}>
          <div style={{ width: `100%`, height: `100%`, minHeight: `315px`, margin: `0 auto`, backgroundImage: `url(${YonderGuide})`, backgroundSize: `contain`, backgroundRepeat: `no-repeat`, backgroundPosition: `center` }} />
        </div>
        <div style={{ textAlign: `left`, justifySelf: `start`, alignSelf: `center`, marginRight: `3rem` }}>
          <h2><a style={{ color: `${navy}`}} href="https://github.com/aghreed/yonder.guide" target="_blank" rel="noopener noreferrer">Yonder.Guide</a></h2>
          <p>Yonder.Guide is for discovering, documenting, and sharing travel experiences.</p>
          <p>
            An ongoing passion project of mine, inspired by my own travels and those of close friends, Yonder.Guide is intended to be
            an immersive long-form medium for spreading the joy of travel. It is not ready to help document travels around the world yet, but a soft launch is coming this summer.
            Yonder.Guide has to be an excellent project to pick up and try out some new tech - namely Apollo Client & Server, Auth0, CSS Grid, and React Hooks.
          </p>
        </div>
      </div>
    </section>
    {/* Whiteny's site */}
    <section style={{ padding: `5rem 0`, background: `${navy}`, color: `${offWhite}` }}>
      <div style={{ display: `grid`, margin: `0 7rem`, gridTemplateColumns: `3fr 5fr`, gridColumnGap: `2rem`, justifyContent: `space-around` }}>
        <div style={{ textAlign: `right`, justifySelf: `end`, alignSelf: `center`, marginLeft: `3rem` }}>
          <h2><a href="http://www.whitneyjenich.com" target="_blank" rel="noopener noreferrer" style={{ color: `${offWhite}` }}>Whitney's Portfolio</a></h2>
          <p>I was honored when good friend and fellow Creighton graduate, Whitney Jenich, asked me to develop her portfolio site.</p>
          <p>
            Working with talented designers is always a treat and the project served as a great
            introduction to some new technologies for me. This was my first time working with designs made with Sketch, as well as the my first Gatsby site.
            I've since come to appreciate both technologies enough to use them in producing my own portfolio.
          </p>
        </div>
        <div style={{ justifySelf: `start`, width: `100%` }}>
          <div onClick={() => window.open("http://www.whitneyjenich.com", "_blank")} style={{ width: `100%`, height: `100%`, minHeight: `315px`, margin: `0 auto`, backgroundImage: `url(${WhitneyPortfolioGIF})`, backgroundSize: `contain`, backgroundRepeat: `no-repeat`, backgroundPosition: `center` }} />
        </div>
      </div>
    </section>
    {/* TBG site */}
    <section style={{ padding: `5rem 0`, background: `${offWhite}`, color: `${navy}` }}>
      <div style={{ display: `grid`, margin: `0 7rem`, gridTemplateColumns: `5fr 3fr`, gridColumnGap: `2rem`, justifyContent: `space-around` }}>
        <div style={{ justifySelf: `end`, width: `100%` }}>
          <div onClick={() => window.open("http://www.tbgco.com", "_blank")} style={{ width: `100%`, height: `100%`, minHeight: `315px`, margin: `0 auto`, backgroundImage: `url(${TBG})`, backgroundSize: `contain`, backgroundRepeat: `no-repeat`, backgroundPosition: `center` }} />
        </div>
        <div style={{ textAlign: `left`, justifySelf: `start`, alignSelf: `center`, marginRight: `3rem` }}>
          <h2><a href="http://www.tbgco.com" target="_blank" rel="noopener noreferrer" style={{ color: `${navy}`}}>The Benefit Group</a></h2>
          <p>The Benefit Group (TBG) is an Omaha based company that provides employee benefit packages for self funded employers.</p>
          <p>
            Paired up with designer, photographer, and freelancer extraordinaire - <a href="http://www.bridgetmcquillan.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: `underline`, color: `${navy}` }}> Bridget McQuillan
            </a> - we created a new website on WordPress with a completely custom theme.
            We worked hands on with the TBG marketing team to understand their needs with the site to ensure we delivered a working solution.
          </p>
        </div>
      </div>
    </section>
    {/* Angular controllerAs syntax talk */}
    <section style={{ padding: `5rem 0`, background: `${lime}`, color: `${navy}` }}>
      <div style={{ display: `grid`, margin: `0 7rem`, gridTemplateColumns: `3fr 5fr`, gridColumnGap: `2rem`, justifyContent: `space-around` }}>
        <div style={{ textAlign: `right`, justifySelf: `end`, alignSelf: `center`, marginLeft: `3rem` }}>
          <h2><a href="http://techomaha.com/2015/11/alex-reed-controller-as/" target="_blank" rel="noopener noreferrer" style={{ color: `${navy}` }}>ng-nebraska</a></h2>
          <p>
            I took an opportunity to speak at a local meetup ran by some friends and co-workers for AngularJS developers. I talked about the benefits of using "controllerAs" syntax, why you should be using it, and something about soup and stew.
          </p>
          <p>
            Thanks to the good folks at <a style={{ color: `${navy}`, textDecoration: `underline` }} href="http://techomaha.com" target="_blank" rel="noopener noreferrer">TechOmaha</a>, we can still watch the talk today. The source code of the presentation is also available on <a style={{ color: `${navy}`, textDecoration: `underline`}} href="https://github.com/aghreed/controllerAs-syntax-slides">Github</a>.
          </p>
        </div>
        <div style={{ justifySelf: `start`, margin: `0 auto` }}>
          <iframe title="controllerAs-syntax-talk" width="560" height="315" src="https://www.youtube.com/embed/QOiqPLL2Tec" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
    </section>
    {/* Conferences attended - React Rally - MidwestJS - NEJS Conf */}
    {/* Meetups - ngNebraska - NEJS - Mobile Meetup - NodeSchool */}
    {/* Non-Profit - OpenNebraska */}
    <section style={{ padding: `5rem 0`, background: `${navy}`, color: `${offWhite}` }}>
      <h1 style={{ textAlign: `center`, marginBottom: `1em`, color: `${offWhite}` }}>Outside Nine-to-Five</h1>
      <div style={{ display: `grid`, margin: `0 7rem`, gridTemplateColumns: `1fr 1fr`, gridColumnGap: `2rem`, justifyContent: `space-evenly` }}>
        <div style={{ justifySelf: `center`, marginLeft: `3rem` }}>
          <h2 style={{ textAlign: `center` }}>Recent Conferences</h2>
          <ul>
            <li><a style={{ color: `${offWhite} `}} href="http://midwestjs.com/#/main" target="_blank" rel="noopener noreferrer">MidwestJS 2018 - Minneapolis, MN</a></li>
            <li><a style={{ color: `${offWhite}` }} href="https://www.reactrally.com/" target="_blank" rel="noopener noreferrer">React Rally 2018 - Salt Lake, UT</a></li>
            <li><a style={{ color: `${offWhite}` }} href="https://2018.nejsconf.com/" target="_blank" rel="noopener noreferrer">NEJS Conf 2018 - Omaha, NE</a></li>
          </ul>
        </div>
        <div style={{ justifySelf: `center`, marginRight: `3rem` }}>
          <h2 style={{ textAlign: `center`}}>Meetups and Workshops</h2>
          <ul>
            <li><a style={{ color: `${offWhite} `}} href="https://nebraskajs.com/" target="_blank" rel="noopener noreferrer">Nebraska JS</a></li>
            <li><a style={{ color: `${offWhite}` }} href="https://twitter.com/ngnebraska" target="_blank" rel="noopener noreferrer">ng-nebraska</a></li>
            <li><a style={{ color: `${offWhite}` }} href="https://www.meetup.com/LearnSwiftOmaha/" target="_blank" rel="noopener noreferrer">Learn Swift Omaha (formerly Omaha Mobile Group)</a></li>
            <li><a style={{ color: `${offWhite}` }} href="https://www.nodeschool.io" target="_blank" rel="noopener noreferrer">Node School</a></li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
)

export default Side
