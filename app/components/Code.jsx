"use client"
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';


function Code({children}) {
  return (
    <div className='relative'>
        <SyntaxHighlighter language="javascript" style={dracula} showLineNumbers={true}>
            {children}
        </SyntaxHighlighter>
    </div>
  )
}

export default Code