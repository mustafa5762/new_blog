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

  return (
    <div>
        <div className="mt-40">
            <div className="flex justify-center">
                <article className='prose prose-xl prose-p:text-neutral-800'>
                    <Markdown>{data[1].description}</Markdown>
                </article>
            </div>
        </div>

        <div className="h-screen"></div>
    </div>
  )
}

export default Blogpost