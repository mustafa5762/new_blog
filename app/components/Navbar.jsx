import React from 'react'

function Navbar() {

    const data = ['diversity','latest','magazine','ascends','topics','podcasts','videos']
  return (
    <>
        
        <div className="flex justify-center border-neutral-300 py-6 space-x-8">
                    {
                        data.map(link => <div key={link} className="text-neutral-900 cursor-pointer hover:opacity-75 transition capitalize">{link}</div>)
                    }
        </div>
    </>
  )
}

export default Navbar