/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600 in-line">
            StreetArtify - Unleash the Vibrant World of Street Art..
              </h2>
              <p className="mt-4 text-lg leading-relaxed  text-blueGray-600">
              StreetArtify is an immersive platform that celebrates the raw creativity and cultural significance of street art.{" "}
                It embraces the spirit of urban expression and connects enthusiasts, artists, and communities worldwide. 
              </p>
    
              <div className="mt-12">
              <button className="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                <i className="fas fa-heart"></i> Discover Art
              </button>
        
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0  sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/home/map.png"
          alt="..."
        />
      </section>
 
      <section className="mt-2 md:mt-2 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto ">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="https://unsplash.com/photos/SeUCH8qGLbk/download?force=true&w=640"
                  className="w-full align-middle rounded-t-lg"
                />
                {/* <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Great for your awesome project
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Putting together a page has never been easier than matching
                    together pre-made components. From landing pages
                    presentation to login areas, you can easily customise and
                    built your pages.
                  </p>
                </blockquote> */}
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-indigo-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-camera"></i>
                      </div>
                      <h6 className="text-l mb-1 font-semibold">
                      Capture Street Culture's Essence
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Immerse yourself in the dynamic world of urban art, capturing stunning photographs and sharing the raw beauty of street culture.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-indigo-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-paint-brush"></i>
                      </div>
                      <h6 className="text-l mb-1 font-semibold">
                      Urban Stories Unveiled
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Discover the hidden narratives in street art, exploring vibrant murals and graffiti that express social commentary and cultural expressions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-indigo-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-hand-holding-heart"></i>
                      </div>
                      <h6 className="text-l mb-1 font-semibold">Empowering Local Artists</h6>
                      <p className="mb-4 text-blueGray-500">
                      Support and empower local artists through StreetArtify, fostering a thriving community and recognizing their artistic vision.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-indigo-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-globe"></i>
                      </div>
                      <h6 className="text-l mb-1 font-semibold">
                      Virtual Street Art Experience
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Step into a virtual realm where street art transcends boundaries, exploring captivating artworks from around the world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        
        <section className="block relative z-1 bg-blueGray-600">
        
        <div className="container mx-auto">
          <div className="justify-center ">
            <div className="justify-center text-center mt-64">
              <div className="w-full md:w-12/12 px-12 md:px-4 py-12">
                <h2 className="font-semibold text-4xl text-white uppercase">Discover top street Arts</h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
                
                </p>
              </div>
            </div>
            <div className="w-full lg:w-12/12 px-4 -mt-4">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-3/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center text-white">
                    Street Art 1
                  </h5>
                  <Link href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/arts/art_1.png"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-3/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center text-white">
                  Street Art 2
                  </h5>
                  <Link href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/arts/art_2.png"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-3/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center text-white">
                  Street Art 3
                  </h5>
                  <Link href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/arts/art_3.png"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-3/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center text-white">
                  Street Art 4
                  </h5>
                  <Link href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/arts/art_4.png"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <div className="container mx-auto overflow-hidden pb-20">
        
           

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32">
            
              <img
                alt="..."
                className="max-w-full rounded-lg "
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateX(11deg) rotateY(2deg) rotate(2deg)",
                }}
                src="/img/arts/art.jpg"
              />
            
            </div>

            <div className="w-full md:w-6/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <h3 className="text-3xl mb-2 font-semibold leading-normal uppercase">
              A team passionate about urban creativity
              </h3>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-600">
              At StreetArtify, we are a team driven by an unyielding passion for urban creativity. We believe in the power of art to transform ordinary city spaces into extraordinary masterpieces. With our unwavering enthusiasm and dedication, we strive to uncover the hidden beauty of street art and bring it to the forefront.


              </p>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-600">
              We are a collective of artists, enthusiasts, and advocates who are committed to exploring, documenting, and sharing the captivating world of street art.               </p>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-600">
              From awe-inspiring murals to thought-provoking graffiti, we seek to showcase the immense talent and unique perspectives of artists from all corners of the globe.
              </p>
             
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                Contact us{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Download app */}
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <h3 className="text-blueGray-700 text-4xl font-semibold -mt-64">
                Download StreetArtify App (Coming Soon..)
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500 mb-24">
                
                </p>
                <ul className="list-none mt-24">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="bg-blueGray-800 p-4 mr-4 text-center inline-flex items-center justify-center w-9 h-9 mb-4 shadow-lg rounded-full text-white">
                            <i className="fas fa-circle-1">1</i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg text-blueGray-500">
                        Discover a vast collection of public artworks nearby
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="bg-blueGray-800 p-4 mr-4 text-center inline-flex items-center justify-center w-9 h-9 shadow-lg rounded-full text-white">
                              <i className="fas fa-circle-1">2</i>
                          </span>
                      </div>
                      <div>
                        <h4 className="text-lg text-blueGray-500">
                        Access in-depth artist backgrounds, stories, and artwork locations
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                      <span className="bg-blueGray-800 p-4 mr-4 text-center inline-flex items-center justify-center w-9 h-9 shadow-lg rounded-full text-white">
                            <i className="fas fa-circle-1">1</i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg text-blueGray-500">
                        Like and curate your favorite street art for an immersive city experience
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg "
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/home/app_screen.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
              Unlock the world of street art with StreetArtify! 
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              Join our passionate community and explore the world of urban creativity. Get started today and be part of the art revolution!  Together, let's celebrate the power of artistic expression on every corner of the globe.              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="auth/register"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  REGISTER
                </a>
                <a
                  href="auth/login"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fas fa-sign-in-alt text-lg mr-1"></i>
                  <span>Already A Member</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
        
      </section>
      <Footer />
    </>
  );
}
