import { Link } from "react-router-dom";
import { Button } from "../../ui/Button/Button";
// @ts-ignore
import styles from "./Home.module.scss";

// @ts-ignore
import { ReactComponent as QrIcon } from "../../assets/img/qr.svg";

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h2>Kadyrov Temirlan</h2>

        <Link to="/scanner" className={styles.scanBox}>
          <QrIcon />
          <div>scan</div>
        </Link>
        <Button className={"gray"}>Моя статистка</Button>
      </div>
    </div>
  );
};
