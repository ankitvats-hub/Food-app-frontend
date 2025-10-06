import React from 'react'
import {data} from '../restApi.json'
const WhoAreWe = () => {
  return (
    <section className='who_are_we' id='who_are_we'>
        <div className="container">
            <div className="text_banner">
                {
                 data[0].who_we_are.slice(0,2).map(Element=>{
                    return(
                        <div className="card" key={Element.id}>
                            <h1 style={{fontWeight: "300"}} className='heading'>{Element.number}</h1>
                            <p>{Element.title}</p>
                        </div>
                    )
                 })
                }
            </div>
            <div className="image_banner">
                <img src='/center.svg' alt='center' className='gradient_bg' />
                <img src='/whoweare.png' alt='who' />
            </div>
            <div className="text_banner">
                {
                 data[0].who_we_are.slice(2).map(Element=>{
                    return(
                        <div className="card" key={Element.id}>
                            <h1 style={{fontWeight: "300"}} className='heading'>{Element.number}</h1>
                            <p>{Element.title}</p>
                        </div>
                    )
                 })
                }
            </div>
        </div>
    </section>
  )
}

export default WhoAreWe