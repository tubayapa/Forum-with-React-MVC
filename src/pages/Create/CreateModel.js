import axios from "axios";
import { toast } from "react-toastify";

export default class createModel {
  async createPost(newPost) {
    try {
      const res = await axios.post("http://localhost:3000/posts", newPost);
      toast.success("Post is created successfully", { autoclose: 500 });
    } catch (err) {
      toast.error("Sorry something went wrong", { autoclose: 500 });
      console.log(err);
    }
  }
}
