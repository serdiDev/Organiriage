import React from 'react'
import Footer from '../components/footer'
import Nav from '../components/nav'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

const MySwal = withReactContent(Swal)

function handleSubmit (e) {
    e.preventDefault()
    MySwal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Votre message a bien été envoyé',
        footer: '<a href="https://github.com/serdiDev">Organiriage, par serdiDev</a>',        
    })
}
export default function contact() {    
    
    return (
        <div  className="bg-gray-200 font-sans leading-normal tracking-normal">
            <Nav activeLink="/contactus" />            
            <div className="py-24 flex flex-col content-center lg:flex-row lg:content-start lg:justify-center w-full">                
                <div className="flex flex-col justify-center items-center pl-10 lg:text-left w-full lg:w-2/4">
                    <p className="flex text-4xl align-text-top w-full">Contactez-nous</p>
                    <p className="w-full  mt-5">
                        Vous pouvez nous joindre via le formulaire ou directement par téléphone 7j/7, de 10h à 20h30 au numéro gratuit
                    </p>
                    <p className="text-red-600 w-full mt-10">
                        00 00 00 09 00
                    </p>
                    <p className="w-full mt-10">                        
                        Nous nous engageons à vous rappeler ou à vous répondre dans un délai maximum de 24 heures.
                    </p>
                    <p className="text-xs w-full mt-10">                        
                        Merci à vous !
                    </p>
                    <p className="w-full mt-10">
                        Mail : contact@derp.com
                    </p>
                    <p className="w-full mt-10">
                        Téléphone : 00 61 00 00 00
                    </p>
                </div>
                <div className="flex justify-center pl-10 lg:p-0 w-full lg:w-2/4">                 
                    <form className="w-full max-w-lg" onSubmit={(e) => handleSubmit(e)}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                NOM
                            </label>
                            <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                                id="grid-first-name" required
                                minlength="2" maxlength="10"
                                type="text" placeholder="Jane" />                        
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                PRENOM
                            </label>
                            <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500" 
                                id="grid-last-name" required
                                minlength="2" maxlength="10"
                                type="text" placeholder="Doe"
                             />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                E-mail
                            </label>
                            <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                                id="email" 
                                type="email" 
                                required
                            />
                            <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Message
                            </label>
                            <textarea className=" no-resize appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" 
                            id="message" maxlength="100"
                            ></textarea>                        
                            </div>
                        </div>
                        <div className="flex items-center lg:flex-row-reverse ">
                            <div className="md:w-1/3">
                                <input type="submit" value="Contactez-nous" 
                                    role="button" 
                                    className=" shadow bg-indigo-400 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                                />                                
                            </div>                            
                        </div>
                    </form>
                </div>                
            </div>
            <Footer activeLink="/contactus"  />
        </div>  
    )
}
