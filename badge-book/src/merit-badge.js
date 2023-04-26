import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button.js";
import "../src/circle-wrap.js";
import "../src/badge-sticker.js";
import "../src/locked-badge.js";

class MeritBadge extends LitElement {
  static properties = {
    date: { type: String },
    logo: { type: String },
    title: { type: String },
    detailsIcon: { type: String },
    verificationLink: { type: String },
    skills: { type: Array },
    criteriaName: { type: String },
    skillsOpened: { type: Boolean },
  };

  static styles = css`


    #badge {
      position: relative;
      z-index: 2;
    }
  `;

  constructor() {
    super();
    this.skills = [];
    this.skillsOpened = false;
  }

  render() {
    return html`
      <locked-badge ?hidden="${this.skillsOpened}"></locked-badge>
      <div id="badge">
        <badge-sticker
          id="badge-sticker"
          logo="${this.logo}"
          title="${this.title}"
          date="${this.date}"
        ></badge-sticker>
        <simple-icon-button
          icon="cancel"
          @click="${this.skillClick}"
        ></simple-icon-button>
      </div>

      <absolute-position-behavior
        justify
        position="bottom"
        allow-overlap
        sticky
        auto
        .target="${this.activeNode}"
        ?hidden="${!this.skillsOpened}"
      >
        ${this.skills.map(
          (item) => html` <ol>
            <li>List here</li>
            <li>List here</li>
            <li>List here</li>
            <li>List here</li>
          </ol>`
        )}
      </absolute-position-behavior>
    `;
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.activeNode = this.shadowRoot.querySelector("#badge");
  }

  skillClick(e) {
    this.skillsOpened = !this.skillsOpened;
    console.log("skillClick", this.skillsOpened);
  }
}

customElements.define("merit-badge", MeritBadge);
