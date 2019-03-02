import { html } from '/vendor/htm.js';

export const App = () => html`
  <div class="container">
    <form class="pure-form">
      <fieldset>
        <input type="text" class="form-control" />
        <button type="submit" class="pure-button pure-button-primary">Add</button>
      </fieldset>
    </form>
  </div>
`;
