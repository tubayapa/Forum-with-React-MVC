import axios from "axios";

// veri- api ile alakali her turlu yapi burada tanimlanir,
// model olusturulurken class'lar tercih edilir
// apiden post verilerini alan ve donduren fonksiyon

export default class ListModel {
  async getPosts() {
    try {
      const res = await axios.get("http://localhost:3000/posts");

      return res.data;
    } catch (err) {
      alert("Sorry something went wrong");
      console.log(err);
    }
  }
}
