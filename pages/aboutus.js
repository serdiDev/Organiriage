import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Nav from '../components/nav'

const team = [
    {
        name: 'David',
        img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80',
        position: 'Fondateur, directeur et professeur'
    },
    {
        name: 'Elisabeth',
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80',
        position: 'Assistante de Gestion Secrétaire'
    },
    {
        name: 'Jean',
        img: 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80',
        position: 'Professeur/Chorégraphe'
    },
    {
        name: 'Angélique',
        img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=2.95&w=512&h=512&q=80',
        position: 'Professeur/Chorégraphe'
    },
    {
        name: 'Thomas',
        img: 'https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80',
        position: 'Infographe'
    },
    {
        name: 'Himali',
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80',
        position: 'Décoratrice'
    },    
]

function Member ({name, img, position }) {
    return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img alt="team" 
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" 
                src={img} 
            />
            <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">{name}</h2>
                <p className="text-gray-500">{position}</p>
            </div>
            </div>
        </div>
    );
}

export default function Aboutus() {
    return (        
        <div className="bg-gray-200 font-sans leading-normal tracking-normal">
            <Nav  activeLink="/aboutus" />
            <Header />	
            <div className="container py-16 px-4 md:px-0 max-w-6xl mx-auto">
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-16 mx-auto">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-16">
                            Nos services       
                        </h1>
                        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-12">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>                        
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-12">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">The Catalyzer</h2>
                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>                        
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <div className="flex-grow pl-12">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Neptune</h2>
                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>                        
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <section className="text-gray-700 body-font">
                    <div className="container px-5 py-16 mx-auto">
                        <div className="flex flex-col text-center w-full mb-16">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font  mb-16 text-gray-900">Notre Equipe</h1>
                            <p className="lg:w-2/3 mx-auto text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                        </div>
                        <div className="flex flex-wrap md:pl-5 lg:pl-10  -m-2">                                                                                
                            { team.map((member, index) => (
                                <Member key={index} name={member.name} img={member.img} position={member.position} />
                            ) )}
                        </div>
                    </div>
                </section>
            </div>
            <Footer  activeLink="aboutus" />
        </div>
    )
}
