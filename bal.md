---
layout: default
---
<section class="hero hero--ball">
  {% include header.html %}
  <h1 class="hero_headline">Höstbalen</h1>
  <p class="hero_text">Ät gott, skratta, och svinga dina lurviga. Höstbalen är allt det bra du minns från balerna i studentlivet och inget av det&nbsp;dåliga.</p>
</section>
<section>
  <div class="inner inner--page">
    <h2 class="page_headline">Vad?</h2>
    <p class="page_text page_text--last">Höstbalen är allt du saknat och lite till. En episk succé som markerar en punkt i tiden. Höstbalen är en klassisk men förbättrad studentikos bal, för oss som redan har lämnat studentlivet. Det betyder bland annat högtidsdräkt, spex, sånghäften och styrdans.</p>
    <h2 class="page_headline">Varför?</h2>
    <p class="page_text page_text--last">Vi saknade sittningarna från studenttiden och ville göra något åt det. Istället för att drömma om svunna tider på svunna platser vill vi helt enkelt göra livet mer uppsluppet.</p>
    <h2 class="page_headline">För vem?</h2>
    <p class="page_text">Höstbalen är öppen för dig som studerat i en stad med stark studenttradition. Om du inte redan fått en inbjudan kan du skriva upp dig på anmälningslistan och hålla tummarna.</p>
    <p class="page_text page_text--last">Vi kan tyvärr inte hålla höstbalen öppen för alla, då riskerar vi att tappa det studentikosa och bli en fest bland andra fester.</p>
    <h2 class="page_headline">Regler</h2>
    <p class="page_text page_text--last">Vi gillar när människor pratar med varandra, och tycker det är trist när människor tittar på små fyrkantiga skärmar. Därför kommer du att få lämna in alla dina små skärmar när du anländer. De vaktas sen av en tystlåten och stor man vi hyrt in för kvällen.</p>
    <h2 class="page_headline">Praktiskt</h2>
    <ul>
      <li>Datum: </li>
      <li>Tid:</li>
      <li>Var: </li>
      <li>Klädsel: Högtidsdräkt</li>
      <li>Kostnad: x per kuvert</li>
    </ul>
    <p class="page_text page_text--last"></p>
    <h2 class="page_headline">Anmäl intresse</h2>
    <p class="page_text page_text--last">Alla som anmäler intresse kommer att få ett svar. Lyckligt lottade föräras med en inbjudan. Att tacka ja till inbjudan är bindande, intresseanmälan förpliktar inte.</p>
    <form action="https://formspree.io/f/xnnaejrl" method="POST">
      <div class="form_subgroup">
        <label class="form_label" for="firstname">Förnamn</label>
        <input class="form_input" id="firstname" name="firstname" placeholder="Dag" />
      </div>
      <div class="form_subgroup">
        <label class="form_label" for="lastname">Efternamn</label>
        <input class="form_input" id="lastname" name="lastname" placeholder="Hammarskjöld" />
      </div>
      <div class="form_subgroup">
        <label class="form_label" for="email">E-post</label>
        <input class="form_input" id="form_email" name="email" placeholder="hammarn@hotmail.com" />
      </div>
      <div class="form_subgroup">
        <label for="education">Var har du studerat?</label>
        <select class="form_select" id="education" name="education">
          <option value="uppsala">Uppsala universitet</option>
          <option value="lund">Lunds universitet</option>
          <option value="chalmers">Chalmers</option>
          <option value="other">Annat - fyll i nedan</option>
        </select>
      </div>
      <div class="form_subgroup">
        <label class="form_label" for="message">Meddelande</label>
        <textarea class="form_textarea" id="message" placeholder="För guds skull, snälla välj mig! Jag var sexmästare på nationen!"></textarea>
      </div>
      <input type="hidden" name="_next" value="https://orden.eljest.se/tack" />
      <input type="hidden" name="_subject" value="Anmälan höstbal!" />
      <input type="submit" id="submit" value="Anmäl intresse" />
    </form>
  </div>
</section>
