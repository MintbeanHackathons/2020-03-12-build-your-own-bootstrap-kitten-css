import React from 'react'
import Highlight from 'react-highlight'
import { renderToStaticMarkup } from 'react-dom/server'

const Snippet = ({ children }) => {
    return (
        <Highlight className="html">
            { renderToStaticMarkup(children) }
        </Highlight>
    )
}

export default Snippet
