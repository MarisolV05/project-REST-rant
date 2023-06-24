const React = require('react')
const Def = require('./default')

function home () {
    return (
        <def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/restaurant1.jpg" alt="restaurant" width="1000" length="1000"/>
                
</div>

  
                <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>

            </main>
        </def>
    )
}

module.exports = home