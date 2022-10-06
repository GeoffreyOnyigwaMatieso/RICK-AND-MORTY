import React from 'react'
import styles from './Card.module.scss'

export const Card = ({results}) => {
    // console.log(results)

    // conditional rendering of the results 
    let display;
    if(results){
        // using map function to automatically display our cards 
        display = results.map(x=>{
            // destructuring our x variable holder 
            let {id, name,image,location, status } = x 
            return(<div key={id} className='col-4 mb-4 position-relative' >
                <div className= {styles.cards}>
                    <img src={image} alt='' className= {`${styles.img} img-fluid}`} />
                    <div style = {{ padding:"10px" }}className='content'>
                        <div className='fs-4 fw-bold mb-4' >{name}</div>
                        <div className=''>
                            <div className='fs-6'>Last Location</div>
                            <div className='fs-5'>{location.name}</div>

                        </div>
                    </div>
                </div>
                <div className={`${styles.badge} position-absolute badge bg-success`} >{status}</div>
                </div>)
        })
    } else{
     display =  "No Characters Found"
    }
  return (
    <div>{display}</div>
  )
}
