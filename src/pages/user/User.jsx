import SingleUser from "../../components/singleUser/SingleUser";
import { singleUser } from "../../data";

const User = () => {
  // fetch data using the api, and send it to the user page
  return (
    <div>
      <SingleUser {...singleUser} />
    </div>
  );
};

export default User;
