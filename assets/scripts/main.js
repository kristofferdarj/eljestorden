const accordionItems = document.getElementsByClassName('js-accordion');

for (let i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener('click', function () {
    this.classList.toggle('is-expanded')
  })
}
