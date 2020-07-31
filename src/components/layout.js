import React from "react"
import GitHubCorner from "react-github-corner"
import { Link } from "gatsby"

import ShareButtons from "./sharebuttons"

const Layout = ({ title, children }) => {
  return (
    <div>
      <header className="pt-24 pb-12 px-4 text-center text-white bg-gradient-brand">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            <Link to={`/`} className="shadow-none">
              JavaScript Framework
            </Link>
          </h1>
          <h2 className="text-xl font-thin">
            A List of JavaScript Frameworks and Libraries
          </h2>
          <ShareButtons className="mt-12 inline-flex" />
        </div>
        <GitHubCorner
          href="https://github.com/cosmicjs/javascriptframework"
          bannerColor="#2D3748"
          size="100"
          svgStyle={{ zIndex: 300 }}
        />
      </header>
      <nav className="py-3 px-4 text-white bg-gray-800 shadow-lg">
        <div className="max-w-screen-xl mx-auto">
          <ul className="flex justify-center flex-col sm:flex-row text-center">
            <li className="sm:mr-6 sm:mb-0 mb-2 m-0">
              <Link
                to={`/`}
                className="shadow-none font-medium hover:text-blue-400"
              >
                Home
              </Link>
            </li>
            <li className="sm:mr-6 sm:mb-0 mb-2 m-0">
              <Link
                to={`/about`}
                className="shadow-none font-medium hover:text-blue-400"
              >
                About
              </Link>
            </li>
            <li className="sm:mr-6 sm:mb-0 mb-2 m-0">
              <Link
                to={`/contribute`}
                className="shadow-none font-medium hover:text-blue-400"
              >
                Contribute
              </Link>
            </li>
            <li className="sm:mr-6 sm:mb-0 mb-2 m-0">
              <a
                href="https://www.cosmicjs.com/"
                target="_blank"
                rel="noreferrer"
                className="shadow-none font-medium hover:text-blue-400"
              >
                Need a JavaScript CMS?
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="px-4 py-20 bg-gray-100">
        <div className="max-w-screen-xl mx-auto">{children}</div>
      </main>
      <footer className="pt-16 pb-10 px-4 text-2xl text-center text-white font-light bg-gray-800">
        <div className="max-w-screen-lg mx-auto">
          <p className="mb-4">
            JavaScript Framework is maintained by{" "}
            <b className="font-bold">
              <a className="shadow-none" href="https://www.cosmicjs.com/">
                Cosmic
              </a>
            </b>
            , the perfect{" "}
            <b className="font-bold">
              <a
                className="shadow-none"
                href="https://www.cosmicjs.com/knowledge-base/javascript-cms"
              >
                JavaScript CMS
              </a>
            </b>{" "}
            for your JavaScript websites and apps.
          </p>
          <small className="font-thin text-sm">
            © Cosmic {new Date().getFullYear()}
          </small>
        </div>
      </footer>
    </div>
  )
}

export default Layout
