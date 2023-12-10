import Markdown from 'markdown-to-jsx';
import React from 'react'
import Code from './Code';


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
    <div className='p-[3vw]'>
      <div className="flex justify-center items-center">
        <div className='max-w-3xl'>
          <Markdown
            className="prose xl:prose-xl prose-p:text-black prose-a:text-lime-600"
            options={{
              overrides: {
                Code: {
                  component: Code
                }
              }
            }}
          >
            {data[1].description}
          </Markdown>
        </div>
      </div>
    </div>
  )
}

export default Blogpost