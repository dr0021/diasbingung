var names = originalNames = [
  'Sate', 
  'Nasi Padang', 
  'Nasi Timbel',
  'Sup Ikan',
  'Nasi Goreng',
  'Pizza',
  'Ayam Goreng',
  'Salad',
  'Gudeg',
  'Nasi Liwet',
  'Nasi Kuning',
  'Soto Banjar',
  'Coto Makassar',
]

var random, runner
var isRunning = false
var currentName = ''
var display = document.querySelector('#name')
var player = document.querySelector('#player')
var resetter = document.querySelector('#resetter')


resetter.addEventListener('click', e => {
  names = originalNames
})


display.addEventListener('click', e => {
  
  if (names.length <= 1) {
    display.innerHTML = names[0]
    return;
  }

  if (isRunning) {
    
    isRunning = false
    player.innerHTML = '▐▐ Pause'
    clearInterval(runner)
    
    var index = names.indexOf(currentName)
    names.splice(index, 1)
    
  } else {
    
    isRunning = true
    player.innerHTML = '► Running'

    runner = setInterval(() => {

      random = Math.abs(Math.floor(Math.random() * names.length))

      display.innerHTML = currentName = names[random]

    }, 1)
    
    console.log(names)

  }

})
