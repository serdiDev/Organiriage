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

export default function IndexPage() {
  return (
    <div  className="bg-gray-200 font-sans leading-normal tracking-normal w-full">
      {/* Header */}
      <Header />		
      {/*Container*/}
      <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">        
        <div className="mx-0 sm:mx-6">          
          {/*Nav*/}          
          <DefaultNav activeLink="/" />
          <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">              
            {/*Lead Card*/}
            <LeadCard img="wedding/lead1_suotel" />
            {/*Posts Container*/}
            <div className="flex flex-wrap justify-between pt-12 -mx-6">
              {/*1/3 col */}          
              <Col1div3 imgUrl="wedding/mariage1_yn8jiq" title="Adam & Jane Smith" info="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression." />
              {/*1/3 col */}            
              <Col1div3 imgUrl="wedding/mariage5_dywr1p" title="Larry & Rose De la Roche" info="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression." />
              {/*1/3 col */}
              <Col1div3 imgUrl="wedding/mariage4_urzwdc" title="Pierre & Lyse Jean" info="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression." />

              {/*1/2 col */}            
              <Col1div2 imgUrl="wedding/mariage2_rxtv2o" title="Raoul & Emily Del Rosa" info="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression." />
              {/*1/2 col */}            
              <Col1div2 imgUrl="wedding/mariage6_v3vvsy" title="Kyle & Pane King" info="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression." />

              {/*2/3 col */}            
              <Col2div3 imgUrl="wedding/mariage3_bh9ovk" title="Joseph & Rachelle Mils" info="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression." />
              {/*1/3 col */}
              <Col1div3 imgUrl="wedding/mariage7_rn4txw" title="Derick & Rose Allan" info="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression." />
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
      <Footer activeLink="/" />
    </div>
  );
}
