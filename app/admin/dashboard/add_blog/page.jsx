"use client"

import axios from 'axios'
import React, { useState } from 'react'


function Pag() {

    const [title, settitle] = useState(null)
    const [metatitle, setmetatitle] = useState(null)
    const [desc, setdesc] = useState(null)
    const [metadesc, setmetadesc] = useState(null)
    const [content, setcontent] = useState(null)
    const [cat, setcat] = useState(null)
    const [image, setimage] = useState(null)

    const submitHandler = async (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append("title", title)
        fd.append("meta_title", metatitle)
        fd.append("meta_description", metadesc)
        fd.append("short_description", desc)
        fd.append("description", content)
        fd.append("category", cat)
        fd.append("image", image)

        try {
            const res = await axios.post("https://sore-cyan-twill.cyclic.app/api/blogs", fd)
            console.log(res)
        } catch (error) {console.log("an error occured")}
    }

  return (
    <div>
        <div className="px-40 py-10">
            <div className="flex justify-center">
                <form onSubmit={submitHandler} className='w-full lg:w-3/6'>
                  <div>
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Post Title</label>
                    <input onChange={(e) => settitle(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:outline-none focus:border-indigo-600 block w-full p-2.5" placeholder="Write Title Here" required />
                  </div>
                  <br />
                  <div>
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Meta Title</label>
                    <input onChange={(e) => setmetatitle(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:outline-none focus:border-indigo-600 block w-full p-2.5" placeholder="Write Meta Title Here" required />
                  </div>
                  <br />
                  <div>
                    <label htmlFor="short_description" className="block mb-2 text-sm font-medium text-gray-900">Short Description</label>
                    <textarea onChange={(e) => setdesc(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:outline-none focus:border-indigo-600 block w-full p-2.5" placeholder="Write Short Description Here" required />
                  </div>
                  <br />
                  <div>
                    <label htmlFor="short_description" className="block mb-2 text-sm font-medium text-gray-900">Meta Description</label>
                    <textarea onChange={(e) => setmetadesc(e.target.value)} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:outline-none focus:border-indigo-600 block w-full p-2.5" placeholder="Write Meta Description Here" required />
                  </div>
                  <br />
                  <div>
                    <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900">Post Content</label>
                    <textarea onChange={(e) => setcontent(e.target.value)} rows={5} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:outline-none focus:border-indigo-600 block w-full p-2.5" placeholder="Write Post Content Here in XML" required />
                  </div>
                  <br />
                  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Choose Category</label>
                  <select onChange={(e) => setcat(e.target.value)} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none block w-full p-2.5">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  <br />
                  <label class="block mb-2 text-sm font-medium text-gray-900">Upload Image</label>
                  <input onChange={(e) => setimage(e.target.files[0])} class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none" aria-describedby="file_input_help" id="file_input" type="file"/>
                  <div class="mt-1 text-sm text-gray-500">SVG, PNG, JPG or GIF.</div>
                  <br />
                  <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Pag