const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.childre}
            </body>
        </html>
    )
}

module.exports = Def