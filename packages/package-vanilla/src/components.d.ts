/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
  interface HfBarcode {
    options: object | undefined;
    tag: string;
    value: string | undefined;
  }
}
declare global {
  interface HTMLHfBarcodeElement
    extends Components.HfBarcode,
      HTMLStencilElement {}
  var HTMLHfBarcodeElement: {
    prototype: HTMLHfBarcodeElement;
    new (): HTMLHfBarcodeElement;
  };
  interface HTMLElementTagNameMap {
    "hf-barcode": HTMLHfBarcodeElement;
  }
}
declare namespace LocalJSX {
  interface HfBarcode {
    options?: object | undefined;
    tag?: string;
    value?: string | undefined;
  }
  interface IntrinsicElements {
    "hf-barcode": HfBarcode;
  }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      "hf-barcode": LocalJSX.HfBarcode &
        JSXBase.HTMLAttributes<HTMLHfBarcodeElement>;
    }
  }
}
