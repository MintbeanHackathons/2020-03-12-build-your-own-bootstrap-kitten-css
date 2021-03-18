import React from 'react'
import ButtonPage from './pages/ButtonPage'

const App = () => {

    return (
        <div>
            <section className="body">
                <header>Specific Tags</header>
                <h1>Hussain</h1>
                <h1>Header 1</h1>
                <h2>Header 2</h2>
                <h3>Header 3</h3>
                <h4>Header 4</h4>
                <h5>Header 5</h5>
                <h6>Header 6</h6>
            </section>
            <section>
                <nav>Nav</nav>
                <aside>Aside</aside>
                <header>Header</header>
                <footer>Footer</footer>
                <main>Main</main>
                <section>Section</section>
                <ol>Ol</ol>
                <li>Li</li>
                <ul>Ul</ul>
                <p>p</p>
                <a>a</a>
                <code>code</code>
            </section>
            <section>
                <header>Cards</header>
                <div className="card">Hello World</div>
            </section>
            "<section className="rows"></section> "
            <section className="rows">
                <div className="card">Card 1</div>
                <div className="card">Card 2</div>
                <div className="card">Card 3</div>
            </section>
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
