const React = require('react')
const Def = require('./default')

function error404 (){
    return(
        <def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                
                <div>
                    <img src="/images/cat.jpg" alt="cat"/>
                    </div>
                    <div>
                    Photo by <a href="https://unsplash.com/@hirmin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Max Kleinen</a> on <a href="https://unsplash.com/photos/6c9dHfVRnSQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
         

</div>
<p>Oops, sorry, we can't find the page!</p>
            </main>
        </def>
    )
}
module.exports = error404