const accordionItems = document.getElementsByClassName('accordion_item');

for (let i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener('click', function () {
    this.classList.toggle('is-expanded')
  })
}
