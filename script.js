const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

//adiciona o evento de click ao next
next.addEventListener('click', () => {
  //adiciona um ao contador a cada click.
  currentActive++
  //se o contador estrapolar o valor da length de circles ele recebe o valor da length(4).
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  //executa a função update
  update()
})
//adciona o evento de click ao prev
prev.addEventListener('click', () => {
  //subtrai um do contador a cada click.
  currentActive--
  //se o contador chegar a zero ele volta a ser 1.
  if (currentActive < 1) {
    currentActive = 1
  }
  //executa a função update
  update()
})

//se o index do elemento no loop for menor que o contador ele add a classe active se não ele remove.
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')
  // altera o style width da div progress, conforme a quantidade de itens com a classe "actives".
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'
  //desabilita e reabilita os botões prev e next conforme o valor do contador.
  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
