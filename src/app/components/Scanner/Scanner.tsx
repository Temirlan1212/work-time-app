import { useState, useEffect } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useNavigate } from "react-router-dom";
import { IGeoLocationCoordinates, IGeoLocationPosition, IRes } from "../../shared/types/Scanner";
import { Button } from "../../ui/Button/Button";
// @ts-ignore
import styles from "./Scanner.module.scss";

export const Scanner = () => {
  const [data, setData] = useState({});
  const [torchOn, setTorchOn] = useState(false);
  const [location, setLocation] = useState<IGeoLocationCoordinates>();
  const navigate = useNavigate();

  const ScannerRes = (result: unknown, err: unknown) => {
    if (result) {
      let newObj = {
        location,
        date: Date.now(),
        resonse: (result as IRes).text,
      };
      setData(newObj);
      navigate("/");
    } else setData("Not Found");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position: any) => {
      setLocation((position as IGeoLocationPosition).coords);
    });
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.barcodeScanner}>
        <BarcodeScannerComponent
          width={300}
          height={300}
          torch={torchOn}
          onUpdate={(err: unknown, res: unknown | undefined) => {
            ScannerRes(res, err);
          }}
        />
      </div>

      <Button className="primary" onClick={() => setTorchOn(!torchOn)}>
        Switch Torch {torchOn ? "Off" : "On"}
      </Button>
    </div>
  );
};
