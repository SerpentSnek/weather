import React from 'react'

function TopButtons() {
  const places = [
    {
        id:0,
        city: 'sydney'
    },
    {
        id:1,
        city: 'london'
    },
    {
        id:2,
        city: 'tokyo'
    },
    {
        id:3,
        city: 'toronto'
    },
    {
        id:4,
        city: 'paris'
    },
  ]

  return (
    <div className='flex items-center justify-around my-6'>
      {places.map((place) => (

        <button key={place.id} className='text-blue-100 text-lg font-medium'>{place.city}</button>

      ))}
    </div>
  );
}

export default TopButtons