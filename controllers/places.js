const router = require('express').Router()
const db = require('../models')

// //index
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
     res.render('places/index', {places})
      })
      .catch(err => {
        console.log(err)
        res.render('error404')
      })
    })

 //post
 router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})
 //new
 router.get("/new", (req, res) => {
  res.render("places/new")
})


//   if (!req.body.pic) {
//     req.body.pic = 'http://placekitten.com/600/600'
//   }
//   if (!req.body.city){
//     req.body.city = "Anytown"
//   }
//   if (!req.body.state) {
//     req.body.state = "USA"
//   }
//   places.push(req.body)
//   res.redirect('/places')
// })



// //Show/ID/Edit button
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

// //Show
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

  
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if (!places[id]) {
//    res.render('error404')
//   }
//   else {
//     res.render('places/show', { place: places[id], id })
//   }
// })


// //Delete
router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})

 module.exports = router