---
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---
<section class="section section--hero">
  {% include header.html %}
  <h1 class="hero_headline">Eljest Ordenssällskap</h1>
  <p class="hero_text">Ett ordenssällskap med syfte att under uppstyrda former samla medlemmarna till festlig samvaro, dans och andra spektakel.</p>
</section>
<section class="section section--presentation">
  <div class="presentation_main">
    <h2 class="presentation_headline">Höstbal</h2>
    <p class="presentation_text">Klä upp dig i dina finaste balkläder, sjung studentikosa visor och träffa nya vänner. Om du gillar roliga tal, akademiskt torr humor och dans bör du anmäla dig. Höstbalen är vår mest uppstyrda och högtidliga sammankomst.</p>
    <a href="/bal" class="button button--cta">Läs mer</a>
  </div>
  <img class="presentation_aux" src="{{ '/assets/images/damer_1889.jpg' | prepend: site.baseurl | prepend: site.url }}">
</section>
<section class="section section--presentation2">
  <div class="presentation2_main">
    <h2 class="presentation2_headline">Vårqasque</h2>
    <p class="presentation2_text">Välkomna våren med allt vad en gasque innebär. Vårsånger, middag, och en spektakuler efterfest. Självfallet kommer vi att spexa, skråla och skåla in på småtimmarna.</p>
    <a href="/gasque" class="button button--ctaDark">Läs mer</a>
  </div>
</section>
