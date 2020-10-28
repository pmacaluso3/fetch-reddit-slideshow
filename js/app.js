document.getElementById('submit').addEventListener('click', function() {
  document.getElementById('initial-display').classList.add('hidden')
  document.getElementById('slideshow-container').classList.remove('hidden')
  
  searchTerm = document.getElementById('search-images').value

  fetch(`http://www.reddit.com/search.json?q=${searchTerm}+nsfw:no`)
  .then((res) => res.json())
  .then((json) => {
    const images = json.data.children.map((post) => post.data.url)

    imgCounter = 0

    const interval = setInterval(() => {
      document.getElementById('slideshow').style.backgroundImage = `url(${images[imgCounter]})`
      imgCounter ++
    }, 2 * 1000);
    
    document.getElementById('stop-button').addEventListener('click', function() {
      clearInterval(interval)
      document.getElementById('initial-display').classList.remove('hidden')
      document.getElementById('slideshow-container').classList.add('hidden')
      document.getElementById('slideshow').style.backgroundImage = ''
    })
  })  
})
