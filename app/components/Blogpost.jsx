import Markdown from 'markdown-to-jsx';
import React from 'react'

async function getData() {
    const res = await fetch('https://sore-cyan-twill.cyclic.app/api/blogs');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
  }

async function Blogpost() {
    const data = await getData();

    const heartIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>

  const saveIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>

  const shareIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>

    const comIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
  </svg>
  

 
  
  return (
    <div>
        <div className="mt-40 px-4 lg:px-[10vw]">
            <div className="flex lg:space-x-20">

                <div className="hidden">
                    <div className="px-14 py-20 border-r border-neutral-300">

                        <div>
                            <div className="text-neutral-600">
                                {heartIcon}
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div className="text-neutral-600">
                                {comIcon}
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div className="text-neutral-600">
                                {saveIcon}
                            </div>
                        </div>

                        <div className='mt-10'>
                            <div className="text-neutral-600">
                                {shareIcon}
                            </div>
                        </div>

                    </div>
                </div>

                <article className='max-w-3xl prose prose-lg'>
                    <div className="mt-20">
                        <Markdown>{data[1].description}</Markdown>
                    </div>
                </article>
            </div>
        </div>

        <div className="h-screen"></div>
    </div>
  )
}

export default Blogpost