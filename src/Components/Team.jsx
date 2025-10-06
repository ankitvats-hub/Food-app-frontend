import React from 'react'
import {data} from '../restApi.json';
const Team = () => {
  return (
    <section className='team' id='team'>
        <div className="container">
            <div className="heading_section">
                <h1 className='heading'>OUR TEAM</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam in fugiat reprehenderit delectus voluptatem sit ex qui vero eos, quod ducimus cumque aliquam aspernatur nesciunt facere non rerum laborum? Omnis!</p>
            </div>
            <div className="team_container">
                {
                    data[0].team.map(Element=>{
                        return(
                            <div className="card" key={Element.id}>
                                <img src={Element.image} alt={Element.name}/>
                                <h3>{Element.name}</h3>
                                <p>{Element.designation}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Team