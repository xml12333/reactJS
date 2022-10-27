import "./styles.css";
import userImages from "../../assets/images";
import { numberOfHometasks } from "../../data/users";
const Row = ({ user, idx }) => {
  const sum = user.homeworks.reduce((sum, el) => (sum += el), 0);
  const procent = Math.ceil(sum / 100);
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>
        <img
          src={userImages[`img${user.img}`] || userImages["userpic"]}
          alt="img"
          className="user__img"
        />
      </td>
      <td>{user.name}</td>
      <td>{sum}</td>
      <td>{procent}</td>
      <td>
        {user.homeworks.length === numberOfHometasks ? (
          <span
            data-before="EX"
            style={{ backgroundColor: "#54d226", color: "#fff" }}
            className="mark"
          />
        ) : (
          <span
            data-before="VG"
            style={{ backgroundColor: "#e4ffc7", color: "#54d226" }}
            className="mark"
          />
        )}
      </td>
    </tr>
  );
};

export default Row;
