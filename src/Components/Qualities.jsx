import React from 'react'
import { data } from "../restApi.json";
const Qualities = () => {
  return (
    <section className='qualities' id='qualities'>
    <div className="container">
{
    data[0].ourQualities.map(Element=> (
        <div className="card" key={Element.id}>
            <img src={Element.image} alt={Element.title}/>
            <p className='title'>{Element.title}</p>
            <p className='description'>{Element.description}</p>
        </div>
    ))
}
    </div>
    </section>
  )
}

export default Qualities