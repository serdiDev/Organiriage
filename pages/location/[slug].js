import { useRouter } from 'next/router'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import {Image, CloudinaryContext} from 'cloudinary-react'

const title = [
    {
        name: 'espace1',
        title: 'Rio Love'
    },
    {
        name: 'espace2',
        title: 'Domaine de Sar'
    },
    {
        name: 'espace3',
        title: 'Domaine de Vercha'
    },
    {
        name: 'espace4',
        title: 'Courcelles le Roy'
    },
    {
        name: 'espace5',
        title: 'Les Salons de Lor'
    },
    {
        name: 'espace6',
        title: 'Clos de dogbert'
    },
    {
        name: 'espace7',
        title: 'Domaine de la Thibaudière'
    },
]

const otherLocationImages = [
    'wedding/espace7_u96qmg',
    'wedding/espace4_mf5wi6',
    'wedding/espace6_famoxx',
]

function OtherLocation ({imgUrl}) {
    return(
        <div className="px-2 lg:w-2/6 :w-full">
            <div className="flex flex-wrap w-full sm:py-24 py-16 sm:px-10 px-6 relative">
                <CloudinaryContext cloudName="serdidev">	
                    <Image publicId={imgUrl} alt="gallery" className="w-full object-cover h-32 object-center block absolute inset-0" />                            
                </CloudinaryContext>
            </div>
        </div>
    );
}

export default function Location () {

    const router = useRouter()
    const { slug } = router.query
    let getTitleName, currentTitle    
    if(slug) {
        getTitleName = slug.split('_')
        currentTitle = title.find( title => title.name === getTitleName[0] )
    }

    return (
        <div className="bg-gray-200 font-sans leading-normal tracking-normal">
            <Nav  activeLink="" />            
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-2/3 mx-auto">
                        <div className="flex flex-wrap w-full py-32 px-10 relative mb-4 h-full">
                            <CloudinaryContext cloudName="serdidev">
                                <Image publicId={'wedding/' + slug} alt="gallery" className="w-full object-cover h-full object-center block absolute inset-0" />    
                            </CloudinaryContext>
                        </div>
                        <div className="flex flex-wrap -mx-2">
                              {
                                otherLocationImages.map( (img, index) => <OtherLocation key={index} imgUrl={img} />)                     
                              }
                        </div>
                    </div>
                    <div className="lg:w-2/3 px-5 py-24 mt-32 mx-auto flex flex-wrap justify-center">
                        <h2 className="sm:text-3xl mr-2 text-2xl text-gray-900 font-medium title-font mb-2">
                            { slug ? (currentTitle ? currentTitle.title : 'Not Found') : 'Not Found' }
                        </h2>
                        <div className="pl-6">                            
                            <div className="flex md:mt-4 mt-6">
                                <button className="inline-flex text-white bg-gray-600 border-0 py-1 px-4 focus:outline-none hover:bg-gray-700 rounded">Demander un devis</button>                                                        
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/3 px-5 leading-relaxed mx-auto text-base flex flex-wrap">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nam qui quae ad adipisci, doloremque cupiditate dicta vel, aut deserunt nesciunt quisquam dolorum impedit maxime perferendis magni sed, non ea!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore quibusdam nam praesentium iure eveniet at vitae, ullam temporibus facere sunt iusto officiis unde. Eos libero, doloremque quisquam ipsa accusamus consequatur!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dicta enim consequuntur magnam, consequatur sint odio facilis veniam laudantium neque ipsam deserunt adipisci aspernatur accusamus dignissimos voluptas excepturi. Praesentium, velit?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas voluptatum, ut expedita voluptatibus quasi nam blanditiis accusantium, cum maxime modi cupiditate animi vel accusamus optio! Facere et odit voluptatibus?
                    </div> 
                    <div class="px-5 py-24 mx-auto flex flex-wrap">
                        <div class="flex flex-wrap -m-4 text-center">
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.1K</h2>
                            <p class="leading-relaxed">Mariages</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1.8K</h2>
                            <p class="leading-relaxed">Souscriptions</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2M</h2>
                            <p class="leading-relaxed">Avis</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2K</h2>
                            <p class="leading-relaxed">Recommandations</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <Footer activeLink="" />
        </div>
    )
}