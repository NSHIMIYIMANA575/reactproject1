import React from 'react'

export const TestProps = (props) => {
  return (
    <div>
        <p style={{color:'green'}}>My name is<br/> {props.name} and i am {props.age}</p>
        <ol>
            {props.cars.map((car,index)=>(
                <li key={index}>{car}</li>
            ))
        }
        </ol>
    </div>
  )
}
