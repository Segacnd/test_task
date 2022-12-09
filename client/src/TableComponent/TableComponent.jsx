import { useMemo } from "react";
import TableFooter from "../TableFooter/TableFooter";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";
import styles from "./TableComponent.module.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function TableComponent() {
  const [data, setData] = useState([]);
  const uniqItems = useMemo(() => [...new Set(data.map((item) => item.ip))], [data]);
  const totalCount = useMemo(
    () => data.reduce((accum, item) => accum + Number(item.count), 0),
    [data]
  );

  useEffect(() => {
    axios.get("http://localhost:5000/clientData").then((data) => setData(data.data));
  }, []);

  const rows = useMemo(() => {
    return data.map((item) => <TableRow key={item.id} {...item} />);
  }, [data]);

  const resetData = () => {
    setData([]);
  };

  return (
    <div className={styles.root}>
      <table>
        <TableHeader />
        <tbody>{rows}</tbody>
        <TableFooter totalCount={totalCount} uniqItems={uniqItems.length} />
      </table>

      <button onClick={resetData} className={styles.button}>
        Reset
      </button>
    </div>
  );
}

export default TableComponent;
