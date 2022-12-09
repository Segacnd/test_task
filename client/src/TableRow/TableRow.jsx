import styles from "./TableRow.module.css";

function TableRow({ ip, browser, date, count }) {
  return (
    <tr className={styles.tr}>
      <td>{ip}</td>
      <td>{browser}</td>
      <td>{date}</td>
      <td>{count}</td>
    </tr>
  );
}
export default TableRow;
