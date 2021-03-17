import React from 'react'
import Highlight from 'react-highlight'
import { renderToStaticMarkup } from 'react-dom/server'

const App = () => {

    const Card = ({ text, classes }) =>{
        return <div className={ classes }>{ text }</div>
    }

    const Example = () => <Card text="Primary" classes="primary" />

    const Preview = ({ children }) => <div className="preview">{ children }</div>

    const Snippet = ({ children }) => <div className="snippet">{ children }</div>

    const readHtml = require('./snippets/cards.html')
    const template = { __html: readHtml }
    return (
        <div>
            <section>
                <h1>Hussain</h1>
                <h1>Header 1</h1>
                <h2>Header 2</h2>
                <h3>Header 3</h3>
                <h4>Header 4</h4>
                <h5>Header 5</h5>
                <h6>Header 6</h6>
            </section>
            <Highlight className="html">
                { readHtml }
            </Highlight>
            <div dangerouslySetInnerHTML={template}></div>
            <hr/>

            <Highlight className="html">{ renderToStaticMarkup(<Example />) }</Highlight>
            <Preview>{ <Example/> }</Preview>

        </div>
    )
}

export default App
