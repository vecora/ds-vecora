---
layout: default
title: Forms
description:
---


{% capture example %}

<div class="hbspt-form">
  <form class="hs-form stacked hs-form-private">

  <div class="hs-fieldtype-textarea field hs-form-field">
    <label class="" for="textarea">
      <span>Message</span>
    </label>
    <legend class="hs-field-desc" style="display:none;"></legend>
    <div class="input">
      <textarea id="textarea" class="hs-input" placeholder="Write us a message"></textarea>
    </div>
  </div>

  <div class="hs-fieldtype-text field hs-form-field">
    <label class="" for="fullName">
      <span>Full name</span><span class="hs-form-required">*</span>
    </label>
    <legend class="hs-field-desc" style="display:none;"></legend>
    <div class="input">
      <input id="fullName" class="hs-input" type="text" name="name" required value="" placeholder="Write your full name">
    </div>
  </div>

  <div class="hs_company hs-company hs-fieldtype-text field hs-form-field">
    <label for="companyName">
      <span>Company name</span><span class="hs-form-required">*</span>
    </label>
    <legend class="hs-field-desc" style="display:none;"></legend>
    <div class="input" data-reactid=".hbspt-forms-0.1:$2.$company">
      <input id="companyName" class="hs-input" type="text" name="company" required value="" placeholder="Write your company name" autocomplete="organization">
    </div>
  </div>

  <div class="hs_email hs-email hs-fieldtype-text field hs-form-field">
    <label for="email">
      <span>E-post</span><span class="hs-form-required">*</span>
    </label>
    <legend class="hs-field-desc" style="display:none;"></legend>
    <div class="input">
      <input id="email" class="hs-input" type="email" name="email" required placeholder="Write your e-mail address" value="" autocomplete="email">
    </div>
  </div>

  <div class="hs_phone hs-phone hs-fieldtype-text field hs-form-field">
    <label for="phone-558f9194-afbb-493b-8ddb-86d0c93074ae">
      <span>Telefon</span><span class="hs-form-required">*</span>
    </label>
    <legend class="hs-field-desc" style="display:none;"></legend>
    <div class="input">
      <input id="phone-558f9194-afbb-493b-8ddb-86d0c93074ae" class="hs-input" type="tel" name="phone" required value="" placeholder="" autocomplete="tel">
    </div>
  </div>

  <div class="legal-consent-container" data-reactid=".hbspt-forms-0.2">
    <div class="hs-richtext">
      <p>
        Vecora er opptatt av ditt personvern, og vi vil bare bruke dine personopplysninger til å svare på din henvendelse, og&nbsp;eventuelt for å kunne levere de tjenestene du ber om. Vi vil gjerne også kontakte deg om våre øvrige tjenester, og annet&nbsp;innhold som&nbsp;vi tror kan være interessant for deg eller din bedrift. Hvis du ønsker dette, vennligst huk av her:
      </p>
    </div>
    <div>
      <div class="hs-dependent-field">
        <div class="hs-fieldtype-booleancheckbox field hs-form-field">
          <legend class="hs-field-desc" style="display:none;"></legend>
          <div class="input">
            <ul class="inputs-list">
              <li class="hs-form-booleancheckbox">
                <label for="consent" class="hs-form-booleancheckbox-display">
                  <input id="consent" class="hs-input" type="checkbox" name="consent" value="true">
                  <span>
                    <p>Jeg godtar at Vecora kan kontakte meg om sine tjenester og annet innhold.</p>
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <legend class="hs-field-desc checkbox-desc" style="display:none;"></legend>
    </div>
    <div class="hs-richtext">
      <p>
        <a href="#">Les mer om hvordan vi håndterer dine personopplysninger.</a>
      </p>
    </div>
  </div>
  <div class="hs_submit hs-submit" data-reactid=".hbspt-forms-0.5">
    <div class="hs-field-desc" style="display:none;"></div>
    <div class="actions">
      <input type="submit" value="Submit" class="hs-button primary large">
    </div>
  </div>

  </form>
</div>

{% endcapture %}
{% include example.html content=example %}
