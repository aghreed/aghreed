import React from "react"
//import { Link } from "gatsby"
import Image from "../components/image"
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
      <Image />
    </div>
    <h1 style={{ textAlign: `center`, marginTop: `1em`, color: `${navy}` }}>Outside Nine-to-Five Work</h1>
    {/* Yonder.Guide */}
    <section style={{ padding: `5rem 0`, background: `${offWhite}`, color: `${navy}` }}>
      <div style={{ display: `grid`, margin: `0 7rem`, gridTemplateColumns: `5fr 3fr`, gridColumnGap: `2rem`, justifyContent: `space-around` }}>
        <div style={{ justifySelf: `end`, width: `100%` }}>
          <div style={{ width: `100%`, height: `100%`, minHeight: `315px`, margin: `0 auto`, backgroundImage: `url(${YonderGuide})`, backgroundSize: `contain`, backgroundRepeat: `no-repeat`, backgroundPosition: `center` }} />
        </div>
        <div style={{ textAlign: `left`, justifySelf: `start`, alignSelf: `center`, marginRight: `3rem` }}>
          <h2><a style={{ color: `${navy}`}} href="https://github.com/aghreed/yonder.guide">Yonder.Guide</a></h2>
          <p>Yonder.Guide is for discovering, documenting, and sharing travel experiences.</p>
          <p>
            An ongoing passion project of mine - inspired by my own travels and those of close friends - Yonder.Guide is intended to be
            a long-form, richer medium for spreading the joy of travel. Unfortunately it is not ready to be shared with the world yet,
            but has shown to be an excellent project to pick up and try out new tech - namely Apollo Client & Server, Auth0, CSS Grid, and React Hooks.
          </p>
        </div>
      </div>
    </section>
    {/* Whiteny's site */}
    <section style={{ padding: `5rem 0`, background: `${navy}`, color: `${offWhite}` }}>
      <div style={{ display: `grid`, margin: `0 7rem`, gridTemplateColumns: `3fr 5fr`, gridColumnGap: `2rem`, justifyContent: `space-around` }}>
        <div style={{ textAlign: `right`, justifySelf: `end`, alignSelf: `center`, marginLeft: `3rem` }}>
          <h2><a href="http://www.whitneyjenich.com" style={{ color: `${offWhite}` }}>Whitney's Portfolio</a></h2>
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
          <h2><a href="http://www.tbgco.com" style={{ color: `${navy}`}}>The Benefit Group</a></h2>
          <p>The Benefit Group (TBG) is an Omaha based company that provides employee benefit packages for self funded employers.</p>
          <p>
            Paired up with designer, photographer, and freelancer-extraordinaire - <a href="http://www.bridgetmcquillan.com/" target="_blank" style={{ textDecoration: `underline`, color: `${navy}` }}> Bridget McQuillan
            </a> - I developed a custom WordPress theme of her design for the site.
            We worked hands on with the TBG marketing team to understand their goals with a new site and then determine the best design and technical solution attain them.
          </p>
        </div>
      </div>
    </section>
    {/* Angular controllerAs syntax talk */}
    <section style={{ padding: `5rem 0`, background: `${lime}`, color: `${navy}` }}>
      <div style={{ display: `grid`, margin: `0 7rem`, gridTemplateColumns: `3fr 5fr`, gridColumnGap: `2rem`, justifyContent: `space-around` }}>
        <div style={{ textAlign: `right`, justifySelf: `end`, alignSelf: `center`, marginLeft: `3rem` }}>
          <h2><a href="http://techomaha.com/2015/11/alex-reed-controller-as/" style={{ color: `${navy}` }}>ngNebraska Talk</a></h2>
          <p>
            Given the opportunity to speak at ngNebraska meetup for AngularJS developers, I spoke to the benefits of using "controllerAs" syntax and why you should be using it.
          </p>
          <p>
            Thanks to the good folks at <a style={{ color: `${navy}`, textDecoration: `underline` }} href="http://techomaha.com">TechOmaha</a>, we can still watch the talk today. The source code of the presentation is also available on <a style={{ color: `${navy}`, textDecoration: `underline`}} href="https://github.com/aghreed/controllerAs-syntax-slides">Github</a>.
          </p>
        </div>
        <div style={{ justifySelf: `start`, margin: `0 auto` }}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QOiqPLL2Tec" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
    </section>
    {/* Conferences attended - React Rally - MidwestJS - NEJS Conf */}
    {/* Meetups - ngNebraska - NEJS - Mobile Meetup - NodeSchool */}
    {/* Non-Profit - OpenNebraska */}
    <section style={{ padding: `5rem 0`, background: `${navy}`, color: `${offWhite}` }}>
      <div style={{ display: `grid`, margin: `0 7rem`, gridTemplateColumns: `1fr 1fr`, gridColumnGap: `2rem`, justifyContent: `space-evenly` }}>
        <div style={{ justifySelf: `center`, marginLeft: `3rem` }}>
          <h2 style={{ textAlign: `center` }}>Recent Conferences</h2>
          <ul>
            <li><a style={{ color: `${offWhite} `}} href="http://midwestjs.com/#/main">MidwestJS 2018 - Minneapolis, MN</a></li>
            <li><a style={{ color: `${offWhite}` }} href="https://www.reactrally.com/">React Rally 2018 - Salt Lake, UT</a></li>
            <li><a style={{ color: `${offWhite}` }} href="https://2018.nejsconf.com/">NEJS Conf 2018 - Omaha, NE</a></li>
          </ul>
        </div>
        <div style={{ justifySelf: `center`, marginRight: `3rem` }}>
          <h2 style={{ textAlign: `center`}}>Meetups, Workshops, and Non-Profit</h2>
          <ul>
            <li><a style={{ color: `${offWhite} `}} href="https://nebraskajs.com/">Nebraska JS</a></li>
            <li><a style={{ color: `${offWhite}` }} href="https://twitter.com/ngnebraska">ng-nebraska</a></li>
            <li><a style={{ color: `${offWhite}` }} href="https://www.meetup.com/LearnSwiftOmaha/">Learn Swift Omaha (formerly Omaha Mobile Group)</a></li>
            <li><a style={{ color: `${offWhite}` }} href="https://www.opennebraska.io/">Open Nebraska</a></li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
)

export default Side
