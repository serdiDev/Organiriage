import React from 'react'
import Link from 'next/link'
import {Image, CloudinaryContext} from 'cloudinary-react'

function Content({imgUrl, title, info}) {
    return (
        <div className="flex flex-wrap no-underline hover:no-underline">
            <CloudinaryContext cloudName="serdidev">
                <Image publicId={imgUrl} className="h-64 w-full rounded-t pb-6 object-cover" />                    
            </CloudinaryContext>
            <div className="w-full font-bold text-xl text-gray-900 px-6">{title}</div>
            <p className="text-gray-800 font-serif text-base px-6 mb-5">
                {info}
            </p>
        </div>
    )
}

export default function col1div3 ({imgUrl, title, info, location}) {
    const href = imgUrl.split('/')
    return (
        <div className="w-full md:w-1/3 px-6 pt-6 pb-12 flex flex-col flex-grow flex-shrink">        
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                {
                    location 
                    ? (
                        <Link href={ '/location/' + href[1] }>
                            <a className="no-underline hover:no-underline">
                                <Content imgUrl={imgUrl} info={info} title={title} />
                            </a>    
                        </Link>        
                    )
                    :  <Content imgUrl={imgUrl} info={info} title={title} />
                }                
            </div>                    
        </div>        
    )
}
