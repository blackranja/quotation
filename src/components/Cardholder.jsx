import Card from './Card';
import React from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
const Cardholder = () => {
    const datas= [
        {
            image:"./src/assets/images/img3.jpeg",
            title:"TV WALL",
            description:"Fluted Panels",
            desc2:"PVC Panels",
            desc3:"TV Cabinet",
            desc4:"Labour",
            price1:"Ksh 29,000",
            price2:"Ksh 9,500",
            price3:"Ksh 51,750",
            labour:"Ksh 15,000",
            icon:<IoIosArrowDroprightCircle />,
        },
        {
            image:"./src/assets/images/img1.jpeg",
            title:"Dinning Table",
            description:"Dinning Set",
            desc2:"",
            desc3:"",
            price1:"Ksh 150,000",
            price2:"",
            price3:"",
             icon:<IoIosArrowDroprightCircle />,
    
        },
        {
            image:"./src/assets/images/img5.jpeg",
            title:"Symmetrical Wall Mirrors",
            description:"SWM",
            desc2:"",
            desc3:"",
            price1:"Ksh 40,000",
            price2:"",
            price3:"",
             icon:<IoIosArrowDroprightCircle />,
    
        },
        {
            image:"./src/assets/images/img6.jpeg",
            title:"Lounge Accessories",
            description:"Lounge Accent Chair",
            desc2:"",
            desc3:"",
            price1:"Ksh 39,500",
            price2:"",
            price3:"",
             icon:<IoIosArrowDroprightCircle />,
    
        },
        {
            image:"./src/assets/images/img7.jpeg",
            title:"Console Table",
            description:"Console Table",
            desc2:"",
            desc3:"",
            price1:"Ksh 92,000",
            price2:"",
            price3:"",
             icon:<IoIosArrowDroprightCircle />,
    
        },
        {
            image:"./src/assets/images/img8.jpeg",
            title:"Wall Decoration",
            description:"4Pcs Wall Hanging",
            desc2:"Total",
            desc3:"",
            price1:"Ksh 11,500",
            price2:"Ksh 46,000",
            price3:"",
             icon:<IoIosArrowDroprightCircle />,
    
        },
        {
            image:"./src/assets/images/img9.jpeg",
            title:"Artificial Plants",
            description:"3Pcs Artificial Plants",
            desc2:"Total ",
            desc3:"",
            price1:"@ Ksh 16,500",
            price2:"Ksh 49,500",
            price3:"",
            icon:<IoIosArrowDroprightCircle />,
    
        },
        {
            image:"./src/assets/images/img10.jpeg",
            title:"4 pcs Carpets",
            description:"Sitting area 8 X 11",
            desc2:"Dinning area 7 X 10",
            desc3:"Master bedroom 7 X 10",
            desc4:"Bedroom 6 X 9",
            price1:"Ksh 30,500",
            price2:"Ksh 25,400",
            price3:"Ksh 25,400",
            price4:"Ksh 21,500",
            icon:<IoIosArrowDroprightCircle />,


    
        },
        {
            image:"./src/assets/images/img11.jpeg",
            title:"Curtains Interior",
            description:"Curtains 53m X 1500",
            desc2:"Sheers 63m X 750",
            desc3:"",
            price1:"Ksh 79,500",
            price2:"Ksh 47,250",
            price3:"",
            icon:<IoIosArrowDroprightCircle />,
    
        },
        {
            image:"./src/assets/images/img12.jpeg",
            title:"Outdoor Accessories",
            description:"Artifical Grass",
            desc2:"Total ",
            desc3:"",
            price1:"@ Ksh 2,500/m",
            price2:"Ksh 17,500",
            price3:"",
            icon:<IoIosArrowDroprightCircle />,
    
        },
        {
            image:"./src/assets/images/img13.jpeg",
            title:"Shoe Rack",
            description:"Shoe Rack",
            desc2:"",
            desc3:"",
            price1:"Ksh 55,000",
            price2:"",
            price3:"",
            icon:<IoIosArrowDroprightCircle />,
    
        },
        {
            image:"./src/assets/images/img14.jpeg",
            title:"Coffee Table",
            description:"Coffee Table",
            desc2:"",
            desc3:"",
            price1:"Ksh 60,000",
            price2:"",
            price3:"",
            icon:<IoIosArrowDroprightCircle />,
    
        },
        {
            image:"./src/assets/images/img16.jpeg",
            title:"2 Fabric Beds",
            description:"6 X 6 Bed",
            desc2:"5 X 6 Bed",
            desc3:"Total ",
            price1:"@ Ksh 67,000",
            price2:"@Ksh 17,500",
            price3:"Ksh 123,500",
            icon:<IoIosArrowDroprightCircle />,
    
        },
        {
            image:"./src/assets/images/img17.jpeg",
            title:"Fluted Panels With Full Body Mirror",
            description:"Fluted panel 13pcs X 1850",
            desc2:"Mirror With LED Light",
            desc3:"",
            price1:"Ksh 24,050",
            price2:"Ksh 27,300",
            price3:"",
            icon:<IoIosArrowDroprightCircle />,
    
        },
        {
            image:"./src/assets/images/img18.jpeg",
            title:"Wall Hanging Art",
            description:"Master Bedroom Wall Hanging(150cm X 75cm)",
            desc2:"",
            desc3:"",
            price1:"Ksh 11,500",
            price2:"",
            price3:"",
            icon:<IoIosArrowDroprightCircle />,
    
        },
        {
            image:"./src/assets/images/img19.jpeg",
            title:"2 Accent Chair For Master Bedroom",
            description:"Accent Chair ",
            desc2:"Total ",
            desc3:"",
            price1:"@ Ksh 27,000",
            price2:"Ksh 54,000",
            price3:"",
            icon:<IoIosArrowDroprightCircle />,
    
        },
        {
            image:"./src/assets/images/img20.jpeg",
            title:"Curtain Rods",
            description:"20m Curtain Rod",
            desc2:"Total ",
            desc3:"",
            price1:"@ Ksh 2,050/m",
            price2:"Ksh 41,000",
            price3:"",
            icon:<IoIosArrowDroprightCircle />,
    
        },
    ];
    
  return (
    <div>
        {
            datas.map((data,index)=>(

        
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
          <Card 
          key={index}
            image={data.image}
            title={data.title}
            description={data.description}
            desc2={data.desc2}
            desc3={data.desc3}
            price1={data.price1}
            price2={data.price2}
            price3={data.price3}
            totalPrice={data.totalPrice}
            price4={data.price4}
            desc4={data.desc4}
            labour={data.labour}
            icon={data.icon}
          />
        </div>
            ))
}
        </div>
  )
}

export default Cardholder