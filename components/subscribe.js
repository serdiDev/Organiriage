import React from 'react'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

const MySwal = withReactContent(Swal)

function handleSubmit (e) {
    e.preventDefault()

    MySwal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Vous venez de souscrire à notre newsletter',
        footer: '<a href="https://github.com/serdiDev" >Organiriage, par serdiDev</a>',        
    })
}

export default function subscribe() {    
    return (
        <div className="container font-sans bg-teal-100 rounded mt-8 p-4 md:p-24 text-center">
            <h2 className="font-bold break-normal text-gray-900 text-2xl md:text-4xl">Souscrivez à Organiriage</h2>
            <h3 className="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">Pour recevoir tous les news</h3>
            <div className="w-full text-center pt-4">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
                        <input type="email" 
                            placeholder="tonemail@example.com" required
                            className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none" />
                        <input type="submit" 
                            value="Souscrire" role="button"
                            className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-indigo-500  text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-indigo-700" />
                    </div>
                </form>
            </div>
		</div>
    )
}
