const Reat = require('react')
const Def = require('./default')

function error404 (){
    return(
        <def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find the page!</p>
            </main>
        </def>
    )
}
module.exports = error404