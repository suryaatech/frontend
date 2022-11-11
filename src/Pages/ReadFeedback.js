import React from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export default function ReadFeedback() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "Feedback"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setPost(todosArray);
    });
    return () => unsub();
  }, []);
  if(!post) return null;
  return (
    <div className="pt-12">
    <p>post data</p>
      <div className="todo_container">
        {post.map((datas) => {
            return (
                <p>{datas.nama}</p>
            )
        })}
      </div>
    </div>
  );
}
