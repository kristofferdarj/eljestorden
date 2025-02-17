---
layout: default
---
<section class="hero hero--ball">
  {% include header.html %}
  <hgroup class="hero_hgroup">
    <h1 class="hero_headline">Höstbalen</h1>
    <p class="hero_text">Ät gott, skratta, och svinga dina lurviga. Höstbalen är allt det bra du minns från balerna i studentlivet och inget av det dåliga du&nbsp;glömt.</p>
  </hgroup>
</section>
<section class="sectionContainer">
  <h2 class="page_headline">Vad</h2>
  <p class="page_text page_text--last">Höstbalen är allt du saknat och lite till. En klassisk men förbättrad studentikos bal, för oss som redan har lämnat studentlivet. Det betyder bland annat att du får damma av balklänning eller frack, njuta av uppträdanden, bläddra i sånghäften och dansa&nbsp;styrdans.</p>
  <h2 class="page_headline">Varför</h2>
  <p class="page_text page_text--last">Vi saknade sittningarna från studenttiden. Trots att vi aldrig varit fattigare än då gick vi på fler baler, gasquer och andra sittningar än vi gjort senare. "Så bakvänt," tänkte vi och drog igång Eljest Ordenssällskap.</p>
  <h2 class="page_headline">För vem</h2>
  <p class="page_text">Höstbalen är öppen för dig som studerat i en stad med stark studenttradition och för dig som har pluggat någon annanstans men vill bli en del av det studentikosa. Du kan alltid anmäla intresse och hålla tummarna.</p>
  <p class="page_text page_text--last">Vi kan tyvärr inte hålla höstbalen öppen för alla, då riskerar vi att bli en fest bland andra fester.</p>
  <h2 class="page_headline">Regler</h2>
  <p class="page_text page_text--last">Vi gillar när människor pratar med varandra, och tycker det är trist när människor tittar på små fyrkantiga skärmar. Därför kommer du att få lämna in alla dina små skärmar när du anländer. Det gör också att du inte behöver oroa dig över att du ska hamna på bild eller video. Släpp loss som du gjorde innan smartphones istället.</p>
  <h2 class="page_headline">Praktiskt</h2>
  <p class="page_text">Anmäl ditt intresse om du tror att det här skulle vara något för dig. Allt det praktiska kommer vi att bestämma när vi fått tillräckligt med anmälningar, och om det blir av skickar vi ut inbjudningar som du får ta ställning till då.</p>
  <ul>
    <li>Datum: Hösten 2025</li>
    <li>Tid: 17:00 - sent</li>
    <li>Var: Temperance (troligen)</li>
    <li>Klädsel: Högtidsdräkt m.o.</li>
    <li>Kostnad: 600ish per kuvert</li>
  </ul>
  <p class="page_text page_text--last"></p>
  <h2 class="page_headline">Anmäl intresse</h2>
  <p class="page_text page_text--last">Alla som anmäler intresse kommer att få ett svar. Om vi blir tillräckligt många planerar vi mer och skickar ut inbjudningar. Att tacka ja till inbjudan är bindande, intresseanmälan förpliktar inte.</p>
  <form class="form" action="https://formspree.io/f/xnnaejrl" method="POST">
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
      <label class="form_label" for="education">Alumn från</label>
      <select class="form_select" id="education" name="education">
        <option value="uppsala">Uppsala universitet</option>
        <option value="lund">Lunds universitet</option>
        <option value="chalmers">Chalmers</option>
        <option value="chalmers">LTU</option>
        <option value="other">Annat - fyll i nedan</option>
      </select>
    </div>
    <div class="form_subgroup">
      <label class="form_label" for="participation">Vill du vara med och arrangera</label>
      <select class="form_select" id="participation" name="participation">
        <option value="yes">Ja</option>
        <option value="no" selected="selected">Nej, bara delta</option>
      </select>
    </div>
    <div class="form_subgroup">
      <label class="form_label" for="message">Meddelande</label>
      <textarea class="form_textarea" id="message" name="message" placeholder="Jag pluggade på ___."></textarea>
    </div>
    <input type="hidden" name="_next" value="https://orden.eljest.se/tack" />
    <input type="hidden" name="_subject" value="Anmälan höstbal!" />
    <input class="form_submit" type="submit" id="submit" value="Anmäl intresse" />
  </form>
</section>
