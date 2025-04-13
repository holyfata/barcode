import { Component, Prop, State, h, Host, Watch } from "@stencil/core";
import JsBarcode from "jsbarcode";

@Component({
  tag: "hf-barcode",
  shadow: true,
})
export class HfBarcode {
  // The value to encode into the barcode
  @Prop() value: string | undefined;

  // Options for configuring the JsBarcode library
  @Prop() options: object | undefined;

  // The HTML tag to use for rendering the barcode ('canvas', 'img', or 'svg')
  @Prop() tag: string = "canvas";

  // Internal state to store the root element of the component
  @State() private element: HTMLElement | null = null;

  // Lifecycle method that runs after the component has been added to the DOM
  componentDidLoad() {
    this.generate(); // Generate the barcode when the component is loaded
  }

  // Watch for changes to the 'value', 'options', or 'tag' properties
  @Watch("value")
  @Watch("options")
  @Watch("tag")
  handlePropChange() {
    if (this.element) {
      this.generate(); // Regenerate the barcode when any of these properties change
    }
  }

  // Private method to generate the barcode using JsBarcode
  private generate() {
    if (this.element) {
      // Find the target element (canvas, img, or svg) based on the 'tag' property
      const target = this.element.querySelector(this.tag);
      if (target) {
        // Generate the barcode using JsBarcode
        JsBarcode(target, String(this.value), this.options);
      }
    }
  }

  // Render method to define the component's HTML structure
  render() {
    return (
      <Host>
        {/* Root container with a reference to the element */}
        <div ref={(el) => (this.element = el as HTMLElement)}>
          {/* Render the appropriate tag based on the 'tag' property */}
          {this.tag === "canvas" && <canvas />}
          {this.tag === "img" && <img />}
          {this.tag === "svg" && <svg />}
        </div>
      </Host>
    );
  }
}
