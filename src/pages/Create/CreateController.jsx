import { v4 } from "uuid";
import CreateView from "./CreateView";
import CreateModel from "./CreateModel";
import { useNavigate } from "react-router-dom";

const CreateController = () => {
  //  modelden ornek olsutur

  const model = new CreateModel();

  // anasayfaya yonlendirmek icin navigate
  const navigate = useNavigate();

  // form gonderilince calisacak

  const handleSubmit = (e) => {
    e.preventDefault();

    //1- inputlardaki verileri al ve post olsutur

    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form.entries());

    // console.log(newPost);

    //2- postlara id ekle

    newPost.id = v4();

    //3- api'a veriyi kaydet

    model
      .createPost(newPost)

      .then(() => {});
    navigate("/");
  };

  // controller'lar sadece viwe bilesenini dondurur.
  return <CreateView handleSubmit={handleSubmit} />;
};
export default CreateController;
