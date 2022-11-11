import { db } from "../firebase";

export const addDatas = {
    addData,
    get,
  };
  
  async function addData(datas) {
    await db
      .collection("details")
      .add(datas)
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error(error);
        return error;
      });
  }

  async function get() {
    let datas = [];
    await db
      .collection("details")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          datas.push(doc.data());
        });
      });
    return datas;
  }

