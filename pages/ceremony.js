import DefaultNav from '../components/defaultNav'
import Header from '../components/header'
import Footer from '../components/footer'
import Author from '../components/author'
import LeadCard from '../components/leadCard'
import Col1div2 from '../components/col1div2'
import Col1div3 from '../components/col1div3'
import Col2div3 from '../components/col2div3'
import Subscribe from '../components/subscribe'
import Testimonial from '../components/testimonial'
import Link from 'next/link'

export default function ceremony() {
  return (
    <div  className="bg-gray-200 font-sans leading-normal tracking-normal">
      {/* Header */}
      <Header />		
      {/*Container*/}
      <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">        
        <div className="mx-0 sm:mx-6">          
          {/*Nav*/}          
          <DefaultNav activeLink="/ceremony" />
          <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">              
            {/*Lead Card*/}
            <LeadCard img="wedding/lead2_zerpz5"/>
            {/*Posts Container*/}
            <div className="flex flex-wrap justify-between pt-12 -mx-6">
              {/*1/3 col */}                                    
              <Col1div3 imgUrl="wedding/espace1_p5zgqu" location={true} title="Rio Love" info="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.." />                              
              {/*1/3 col */}                          
              <Col1div3 imgUrl="wedding/espace2_pkdt3y" location={true} title="Domaine de Sar" info="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.."  />                              
              {/*1/3 col */}              
              <Col1div3 imgUrl="wedding/espace3_gzgyqs" location={true} title="Domaine de Vercha" info="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.."  />                              
              {/*1/2 col */}                
              <Col1div2 imgUrl="wedding/espace6_famoxx" location={true} title="Clos de dogbert" info="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.."  />                              
              {/*1/2 col */}                          
              <Col1div2 imgUrl="wedding/espace5_jwcqro" location={true} title="Les Salons de Lor" info="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.."  />                              
              {/*2/3 col */}                          
              <Col2div3 imgUrl="wedding/espace4_mf5wi6" location={true} title="Courcelles le Roy" info="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.."  />                              
              {/*1/3 col */}              
              <Col1div3 imgUrl="wedding/espace7_u96qmg" location={true} title="Domaine de la Thibaudière" info="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.."  />                              
            </div>            
            {/*/ Post Content*/}
              
          </div>     
          {/*Testimonial*/}  
          <Testimonial />
          {/*Subscribe*/}				
          <Subscribe />  
          {/*Author*/}
          <Author />       
        </div>
      </div>
      <Footer activeLink="/ceremony" />
    </div>
  );
}
