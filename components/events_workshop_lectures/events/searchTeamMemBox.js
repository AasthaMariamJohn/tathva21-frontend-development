import { AiOutlinePlusSquare } from 'react-icons/ai';
import styles from './test.module.css'
export default function SearchTeamMemberBox() {
  return (
    <div className={styles["search-member-box"]}>
      <table>
            <thead>
        <tr>
          <th>Tathva Id</th>
          <th>Name</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>John</td>
            <td>1111</td>
        </tr>
        <tr>
            <td>John</td>
            <td>1111</td>
        </tr>
        <tr>
            <td>John</td>
            <td>1111</td>
        </tr>
        <tr>
            <td>John</td>
            <td>1111</td>
        </tr><tr>
            <td>John</td>
            <td>1111</td>
        </tr>
        <tr style={{colSpan:2}}>
            <td>Add Member <AiOutlinePlusSquare/> </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}
