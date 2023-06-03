# Project REST-Rant

## Routes

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | Home page |
| GET | `/places` | Places index page |
| POST | `/places` | Create new place |
| GET | `/places/new` | Form page for creating a new place |
| GET | `/places/:id` | Detail about a particular place |
| PUT | `/places/:id` | Update a particular place |
| GET | `/places/:id/edit` | Form page fo editing an existing place |
| DELETE | `/places/:id` | Delete particular place|
| POST | `/places/:id/rant` | Create a rant (comment) about particular place |
| DELETE | `/places/:id/rant/:rantId` | Delete a rant (comment) about a particular place|
| GET | * | 404 page (matches any route not defined above) |


REST-Rant is an app where users can review restaurants.
