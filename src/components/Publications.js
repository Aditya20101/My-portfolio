// src/components/Testimonials

import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { publications } from "../data";

export default function Publications() {
  return (
    <section id="publications">
      <div className="container mx-auto text-center h-screen mt-24 -mb-12">
        {/* <UsersIcon className="w-10 inline-block mb-4" /> */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 inline-block mb-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>

        <h1 className="sm:text-4xl text-3xl mb-8 font-medium title-font text-white mb-2">
          My Publications
        </h1>

        <div className=" h-4/6 flex flex-wrap  w-2/3 m-auto">
          {publications.map((publication) => (
            <a
              href={publication.link}
              className="p-1 w-full ">
              <div className="p-1 w-full h-5/6">
                <div className="h-full bg-gray-800 bg-opacity-40 rounded">
                  <div className="flex relative min-h-full ">
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-center"
                      src={publication.image}
                    />
                    {/* <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h1 className="leading-relaxed">{publication.title}</h1>
                      <p className="leading-relaxed">{publication.description}</p>
                    </div> */}
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">

                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {publication.title}
                      </h1>
                      <p className="leading-relaxed">{publication.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}