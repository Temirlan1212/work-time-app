import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export const Scanner = () => {
  const [data, setData] = useState("Not Found");
  const [torchOn, setTorchOn] = useState(false);

  return (
    <div>
      <BarcodeScannerComponent
        width={500}
        height={500}
        torch={torchOn}
        onUpdate={(err, result: any) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />

      <p>{data}</p>
      <button onClick={() => setTorchOn(!torchOn)}>Switch Torch {torchOn ? "Off" : "On"}</button>
    </div>
  );
};
