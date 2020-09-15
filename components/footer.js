import React from 'react'
import Link from 'next/link'

const links = [
    {
        name: 'Mariages',
        href:'/',        
    },
    {
        name: 'Lieux de reception',
        href: '/ceremony',        
    },
    {
        name: 'A propos',
        href: '/aboutus',        
    },
    {
        name: 'Contact',
        href: '/contactus',        
    }
]

export default function footer({activeLink}) {
    return (
        <footer className="bg-gray-900">	
            <div className="container max-w-6xl mx-auto flex items-center px-2 py-8">
                <div className="w-full mx-auto flex flex-wrap items-center">
                    <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                        <Link href="/">
                            <a className="text-gray-900 no-underline hover:text-gray-900 hover:no-underline">
                            👰 <span className="text-base text-gray-200 font-semibold">Organiriage</span>
                            </a>
                        </Link>
                    </div>
                    <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                        <ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
                            { links.map( (link, index) => 
                                <li className="m-2" key={index} >
                                    <Link href={link.href}>
                                        <a className={
                                                link.href === activeLink
                                                ? 'inline-block py-2 px-2 text-white no-underline font-semibold text-base'
                                                : 'inline-block  text-white text-gray-600 no-underline font-semibold text-base hover:text-gray-200 hover:text-underline py-2 px-2'
                                            } 
                                        > { link.name } </a>
                                    </Link>
                                </li>
                            )}                     
                        </ul>
                    </div>
                </div>      
            </div>
        </footer>

    )
}
