const React = require('react')
const Def = require('./default')

function home () {
    return (
        <def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Shake" width= "600" height="600"/>
                
<div>
Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on{" "}
              <a href="UNSPLASH_LINK">Unsplash</a>
  </div>
</div>
  
                <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>

            </main>
        </def>
    )
}

module.exports = home