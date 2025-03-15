import Card from './Card';
import React from 'react';

const Cardholder = () => {
    const datas= [
        {
            image:"./src/assets/images/img3.jpeg",
            title:"TV WALL",
            description:"-> Fluted Panels",
            desc2:"-> PVC Panels",
            desc3:"-> TV Cabinet",
            price1:"Ksh 29,000",
            price2:"Ksh 9,500",
            price3:"Ksh 51,750",
            labour:"Ksh 15,000",
    
        },
        {
            image:"./src/assets/images/img12.jpeg",
            title:"TV WALL",
            description:"Fluted Panels",
            desc2:"Pvc panel",
            desc3:"TV Cabinet",
            price1:"Ksh 29,000",
            price2:"Ksh 9,500",
            price3:"Ksh 51,750",
    
        },
        {
            image:"./src/assets/images/img13.jpeg",
            title:"TV WALL",
            description:"Fluted Panels",
            desc2:"Pvc panel",
            desc3:"TV Cabinet",
            price1:"Ksh 29,000",
            price2:"Ksh 9,500",
            price3:"Ksh 51,750",
    
        },
        {
            image:"./src/assets/images/img14.jpeg",
            title:"TV WALL",
            description:"Fluted Panels",
            desc2:"Pvc panel",
            desc3:"TV Cabinet",
            price1:"Ksh 29,000",
            price2:"Ksh 9,500",
            price3:"Ksh 51,750",
    
        },
        {
            image:"./src/assets/images/img14.jpeg",
            title:"TV WALL",
            description:"Fluted Panels",
            desc2:"Pvc panel",
            desc3:"TV Cabinet",
            price1:"Ksh 29,000",
            price2:"Ksh 9,500",
            price3:"Ksh 51,750",
    
        },
        {
            image:"./src/assets/images/img14.jpeg",
            title:"TV WALL",
            description:"Fluted Panels",
            desc2:"Pvc panel",
            desc3:"TV Cabinet",
            price1:"Ksh 29,000",
            price2:"Ksh 9,500",
            price3:"Ksh 51,750",
    
        },
        {
            image:"./src/assets/images/img14.jpeg",
            title:"TV WALL",
            description:"Fluted Panels",
            desc2:"Pvc panel",
            desc3:"TV Cabinet",
            price1:"Ksh 29,000",
            price2:"Ksh 9,500",
            price3:"Ksh 51,750",
    
        },
        {
            image:"./src/assets/images/img14.jpeg",
            title:"TV WALL",
            description:"Fluted Panels",
            desc2:"Pvc panel",
            desc3:"TV Cabinet",
            price1:"Ksh 29,000",
            price2:"Ksh 9,500",
            price3:"Ksh 51,750",
    
        },
        {
            image:"./src/assets/images/img14.jpeg",
            title:"TV WALL",
            description:"Fluted Panels",
            desc2:"Pvc panel",
            desc3:"TV Cabinet",
            price1:"Ksh 29,000",
            price2:"Ksh 9,500",
            price3:"Ksh 51,750",
    
        },
        {
            image:"./src/assets/images/img14.jpeg",
            title:"TV WALL",
            description:"Fluted Panels",
            desc2:"Pvc panel",
            desc3:"TV Cabinet",
            price1:"Ksh 29,000",
            price2:"Ksh 9,500",
            price3:"Ksh 51,750",
    
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
            labour={data.labour}
          />
        </div>
            ))
}
        </div>
  )
}

export default Cardholder