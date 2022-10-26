const getSuperHero=()=>{
  fetch('https://www.superheroapi.com/api.php/%2010223569763528853/244')
  .then(response=response.json())
  .then(json=>console.log(json))
  
}