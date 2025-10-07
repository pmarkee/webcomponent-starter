import templateHTML from "./template.html?raw";

class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: "open"});

    // Clone <template> element from html file and attach it to the shadow DOM.
    const templateDoc = new DOMParser().parseFromString(templateHTML, "text/html");
    const templateElement = templateDoc.getElementById("my-custom-element") as HTMLTemplateElement;
    shadow.appendChild(templateElement.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["greeting", "name"];
  }

  connectedCallback() {
    // Left empty for this starter. This is where you would initialize your event listeners or
    // other logic on the elements inside the template.
    console.log("connected");
  }

  attributeChangedCallback(attr: string, _: string | null, newValue: string | null) {
    // In this case I named the ids the exact same as the attributes, but you could map it any way
    // you want.
    if (MyCustomElement.observedAttributes.includes(attr)) {
      this.shadowRoot!.getElementById(attr)!.textContent = newValue;
    }
  }
}

window.customElements.define("my-custom-element", MyCustomElement);
