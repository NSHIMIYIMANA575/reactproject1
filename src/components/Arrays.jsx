import React from 'react'

export const Arrays = () => {
    const cars = ['benz', 'toyota', 'honda'];
    return (
        <div>
            {/* <ol>
                {cars.map((car, index) => (

                    <li key={index}>{car}</li>
                ))}
            </ol> */}
            {cars.length < 0 ? <p> The Lenght is 3 </p> : <p>Hello</p>}>
        </div>
    )
}
