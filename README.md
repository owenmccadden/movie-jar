# Movie Jar

Simple web app to help you your friends choose what movie you should watch.

- Create a movie jar
- Share it!
- Add movies you want to watch
- When it comes time to watch a movie, select a movie from the jar

##  Architecture 
- AWS Backend – API Gateway, Lambda, Dynamodb
- Next.js Frontend – UI and API routes

#### Dynamo Jars Table

- id – uuid (partition key)
- title – string
- movies – list of strings (list of tmdb movie IDs)

#### AWS Jars API

- /jar
  - /create: create a new jar and add to jars table
  - /get: get a jar by ID
  - /movie
    - /put: add a movie ID to list of movies for a jar
    - /draw: randomly select a movie id from a jar

#### Next.js Routes

- /api/createJar: call /jar/create to create a new jar
- /api/addMovie: call /jar/movie/put to add a movie to your jar
- /api/draw: call /jar/movie/draw to get a movie id then get movie details from the tmdb api
- /api/searchMovie: call tmdb search api

## Movie Data

https://developer.themoviedb.org/docs

  


