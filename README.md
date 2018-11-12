# Bugzy - The worst app ever...

### Setup

1. Make sure you use the ruby version defined at gemfile / .tools-versions
2. run
  - ./bin/rake db:create db:migrate db:seed
  - ./bin/rails s
3. visit http://localhost:3000/home/index

### Bug ideas

Server:

- [some things can be found here](https://github.com/Spectory/sql_dev#best-practices)
- Blocking first render to fetch data.
- Loading unused data/assets
- no assets caching.

Client

- [Rendering Performance](https://developers.google.com/web/fundamentals/performance/rendering/)
- rendering large images
- above the fold
- chaining AJAX calls instead of Promise.all
