import React from 'react'
import Link from 'next/link'
import {Image, CloudinaryContext} from 'cloudinary-react'

export default function author() {
    return (
        <div className="flex w-full items-center font-sans p-8 md:p-24">
            <CloudinaryContext cloudName="serdidev" >
                <Image publicId="lion_v8oyrx" className="w-10 h-10 rounded-full mr-4" alt="Avatar of Author" />
            </CloudinaryContext>
            <div className="flex-1">
                <p className="font-bold text-base md:text-xl leading-none">Organiriage</p>
                <p className="text-gray-600 text-xs md:text-base">
                    Un site vitrine d'une agence d'organistion de mariage par 
                    <a className="text-gray-800 hover:text-indigo-500 no-underline border-b-2 border-indigo-500" href="https://github.com/serdiDev"> SerDiDev</a></p>
            </div>
            <div className="justify-end">
                <Link href="aboutus">
                    <button className="bg-transparent border border-gray-500 hover:border-indigo-500 text-xs text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full">
                        Apprendre plus sur nous
                    </button>
                </Link>
            </div>
        </div>
    )
}
