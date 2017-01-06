#### Elavator Pitch:
This app is designed to allow users to socailly search, review, and rate their favorite movies. 

#### Basic features:
- Login/Signup 
- Search Movies option: user movie search
- Movie Profile: Page with m ovie poster, shot plot summary and rotten tomatoes ratings. Buttons that allow users to add movies to a watched or watn to watch list. 
- User Profile: List the users Name, followers, movie ratings and reviews.Along with wacthed and want to watch list. 
- Watched page: List of movies the user has watched
- Want to watch page: List of movies the user plans to watch
- User Search: shows users theyre following and searches for users to follow. 

#### Apis:
- Backendless
- omdbapi.com

#### Data Modeling:
- User Model
```javascript
{
name:'',
watched:[
  {
  movieid:
  title:
  }
],
future_watch:[
 {
  movieid:
  title:
  }
],
}
followers:[
  {
  userid:
  name:
  }
]
```
- Movie Collection:
```javascript
{
search(s) {
  this.fetch({
    data:{
      s:s
      })
  }
```
#### Routes:
- Login
- Search
- Movie Page 
- User Profile
- Watched
- Future_Watch
- User Search


  
