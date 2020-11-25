function darkMode() {
  let element = document.body;
  let line = document.getElementById('line')

  element.classList.toggle("dark-mode");

  console.log(element)
  console.log(line)
  line.classList.toggle('dark-mode-line')
}
