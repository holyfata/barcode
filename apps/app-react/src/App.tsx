import { HfBarcode } from "@holyfata/barcode-react";

function App() {
  return (
    <div className="App">
      <HfBarcode value="Hello, World!" options={{ displayValue: false }} />
    </div>
  );
}

export default App;
