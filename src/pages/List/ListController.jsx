// controllerda sadece fonksiyonlar olur

import { useEffect, useState } from "react";
import ListView from "./ListView";
import ListModel from "./ListModel";

const ListController = () => {
  //state'ler
  const [posts, setPosts] = useState([]);

  // secilen, ustune tiklanilan kullanici

  const [selectedUser, setSelectedUser] = useState("");

  // listModel classindaki fonskiyonlari buraya cagirmak icin ornegini olsturduk. sonra bu model uzerinden classa erisyoruz. (model.getposts)
  const model = new ListModel();

  useEffect(() => {
    model.getPosts().then((data) => setPosts(data));
  }, []);

  const handleClick = () => {};

  return (
    <ListView
      posts={posts}
      selectedUser={selectedUser}
      setSelectedUser={setSelectedUser}
    />
  );
};

export default ListController;
