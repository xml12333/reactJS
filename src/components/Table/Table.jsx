import "./styles.css";
import { Row } from "..";
const Table = ({ data, tableName }) => {
  return (
    <div>
      <table>
        <caption>{tableName}</caption>
        <tbody>
          {
            data.map((user, idx) => (
            <Row key={idx} user={user} idx={idx} />
          ))}
        </tbody>
      </table>
      `;
    </div>
  );
};

export default Table;
