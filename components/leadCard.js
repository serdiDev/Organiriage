import React from 'react'
import Link from 'next/link'
import {Image, CloudinaryContext} from 'cloudinary-react'

export default function leadCard({img}) {
    return (
        <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
            <div className="flex flex-wrap no-underline hover:no-underline">
              <div className="w-full md:w-2/3 rounded-t">	
                <CloudinaryContext cloudName="serdidev">
                  <Image publicId={img} className="h-full w-full shadow" />
                </CloudinaryContext>
              </div>

              <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                <div className="text-gray-700 body-font">
                  <div className="container py-6">
                    <div className="w-full text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>
                      <p className="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.</p>
                      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">David</h2>
                      <p className="text-gray-500">Fondateur, directeur et professeurr</p>
                    </div>
                  </div>
                </div>

                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <img className="w-8 h-8 rounded-full avatar mr-1" data-tippy-content="Author Name" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80" alt="Avatar of Author" />
                      <img className="w-8 h-8 rounded-full avatar mr-1" data-tippy-content="Member Name" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80" />
                      <img className="w-8 h-8 rounded-full avatar mr-1" data-tippy-content="Member Name" src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80" alt="Avatar of Member" />
                    </div>
                    <Link href="/aboutus">
                      <a className="text-gray-600 hover:text-indigo-700 text-xs md:text-sm">Voir toute l'équipe</a>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
        </div>
    )
}
