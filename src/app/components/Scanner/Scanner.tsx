import { useState, useEffect } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useNavigate } from "react-router-dom";
import { IGeoLocationCoordinates, IGeoLocationPosition, IRes } from "../../shared/types/Scanner";
import { useLazyFetchPostsQuery } from "../../store/api/post";
import { Button } from "../../ui/Button/Button";
// @ts-ignore
import styles from "./Scanner.module.scss";
interface IData {
  location: IGeoLocationCoordinates;
  date: number;
  response: string;
}

export const Scanner = () => {
  const [qrRes, setQrRes] = useState("");
  const [torchOn, setTorchOn] = useState(false);
  const [location, setLocation] = useState<IGeoLocationCoordinates>();
  const [postPosts, res] = useLazyFetchPostsQuery();
  const navigate = useNavigate();

  const ScannerRes = async (result: unknown) => {
    if (result) {
      setQrRes((result as IRes).text);
    } else setQrRes("не найдено");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position: any) => {
      setLocation((position as IGeoLocationPosition).coords);
    });
  }, []);

  useEffect(() => {
    if (qrRes == "https://instagram.com") {
      let newObj = {
        date: Date.now(),
        accuracy: location?.accuracy,
        latitude: location?.latitude,
        longitude: location?.longitude,
        // resonse: JSON.stringify((result as IRes).text),
      };
      postPosts(newObj);
    }
  }, [qrRes]);

  if (res.isSuccess) {
    navigate("/");
  }

  return (
    <div className={styles.main}>
      <div className={styles.barcodeScanner}>
        <BarcodeScannerComponent
          torch={torchOn}
          onUpdate={(err: unknown, res: unknown | undefined) => {
            ScannerRes(res);
          }}
        />
        <div className={styles.scannerBorder}></div>
      </div>
      <p>{res.isLoading ? "loading..." : ""}</p>

      <p>{qrRes}</p>
      <Button className="primary" onClick={() => setTorchOn(!torchOn)}>
        Switch Torch {torchOn ? "Off" : "On"}
      </Button>
    </div>
  );
};
