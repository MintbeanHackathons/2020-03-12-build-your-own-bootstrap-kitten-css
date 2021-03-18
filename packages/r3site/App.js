import React from 'react'
import ButtonPage from './pages/ButtonPage'

const App = () => {

    return (
        <div>
                <header>Specific Tags</header>
            <section className="body">
                <h1>Hussain</h1>
                <h1>Header 1</h1>
                <h2>Header 2</h2>
                <h3>Header 3</h3>
                <h4>Header 4</h4>
                <h5>Header 5</h5>
                <h6>Header 6</h6>
            </section>
            <section>
                <aside>Aside</aside>
                <header>Header</header>
                <main>
                    <p> Main </p>
                    <nav>
                        <a href="/html/">HTML</a>
                        <a href="/css/">CSS</a>
                        <a href="/css/">CSS</a>
                        <a href="/css/">CSS</a>
                        <a href="/css/">CSS</a>
                        <a href="/css/">CSS</a>
                        <a href="/css/">CSS</a>
                        <a href="/css/">CSS</a>
                    </nav>
                    <br></br>
                <li>List item</li>
                <ol> Ordered list
                    <li></li>
                    <li></li>
                </ol>
                <ul>
                    Unordered list 
                    <li></li>
                    <li></li>
                </ul>

                <section>Section</section>
                <p>p</p>
                <a>a</a>
                <code>code</code>

                </main>
                <footer>Footer</footer>
            </section>
            <section>
                <header>Cards</header>
                <div className="card">Hello World</div>
            </section>
            <br></br>

            {/* <p> "<section" className="rows" ></section>" </p> */}
                <header>Flexbox rows</header>
            <section className="rows">
                <div className="card">Card 1</div>
                <div className="card">Card 2</div>
                <div className="card">Card 3</div>
            </section>
                <header>Flexbox columns</header>
            <section className="columns">
                <div className="card">Card 4</div>
                <div className="card">Card 5</div>
                <div className="card">Card 6</div>
            </section>
            <hr/>
            <ButtonPage />
        </div>
    )
}

export default App
