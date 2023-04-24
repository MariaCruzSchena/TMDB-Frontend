
const setRenderTitle = (type) => {    
   const titles =  {
     multimedia: "All you can watch in one place",
     movies: "Movies",
     tv: "TV Shows",
     favorites: "My List",
     banner: "Your next obsession is just a click away",
     subheading: "Search your favorite shows, movies and more!"
     }
  return titles[type]
}

export default setRenderTitle