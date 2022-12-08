import React from 'react';
import './Video.scss'

export default function Video(){
    return(
        <section className='video'>
            <iframe width="727" height="409" src="https://www.youtube.com/embed/djnNkLi_K6E"
                    title="How To Make The Best Croissants At Home" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </section>
    )
}
