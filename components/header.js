import React from 'react'

const imgUrl = "https://res.cloudinary.com/serdidev/image/upload/v1599821940/wedding/bg_dn7vms";

const divStyle = {
    backgroundImage: 'url(' + imgUrl + ')',
    height: '75vh',
    maxHeight: 460
};

export default function header() {
    return (
        <div className="w-full m-0 p-0 bg-cover bg-center" style={divStyle} >
            <div className="container max-w-4xl mx-auto pt-40 text-center break-normal">
            {/*Title*/}
                <p className="text-white font-extrabold text-3xl md:text-5xl">
                👰 Organiriage
                </p>
                <p className="text-xl md:text-2xl text-black">Welcome !</p>
            </div>
      </div>
    )
}
