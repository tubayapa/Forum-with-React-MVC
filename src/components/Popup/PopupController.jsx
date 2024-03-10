import { useEffect, useState } from "react";
import PopupView from "./PopupView";
import PopupModel from "./PopupModel";

const PopupController = ({ user, close }) => {
  const [userPosts, setUserPosts] = useState([]);

  const model = new PopupModel();

  // pencere acildiginda kullancinin gonderilerini aliyoruz

  useEffect(() => {
    model.getUserPosts(user).then((data) => setUserPosts(data));
  }, []);
  return <PopupView user={user} close={close} userPosts={userPosts} />;
};

export default PopupController;
