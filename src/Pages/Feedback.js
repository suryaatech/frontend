import React from 'react';
import garis from './../garis.png';
import PostFeedback from './PostFeedback.js'
import { collection, query, onSnapshot} from "firebase/firestore";
import { db } from "../firebase";

export default function Feedback() {
    const [dataFeedback, setDataFeedback] = React.useState(null);
    React.useEffect(() => {
        const q = query(collection(db, "Feedback"));
        const unsub = onSnapshot(q, (querySnapshot) => {
          let feedbacksArray = [];
          querySnapshot.forEach((doc) => {
            feedbacksArray.push({ ...doc.data(), id: doc.id });
          });
          setDataFeedback(feedbacksArray);
        });
        return () => unsub();
    }, []);
   if(!dataFeedback) return null;
  return (
    <section style={{backgroundColor: "#F7F8FC" }}>
        <div className="container pt-24 pb-12">
            <h1 className="font-bold text-4xl text-slate-600">Your Feedback <span>and Review</span></h1>
            <p className="text-slate-700 text-sm tracking-tight">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <div className="pt-12 pb-8">
                <button className="text-white bg-primary rounded-md px-6 py-2 font-semibold">Possitive Feedback</button>
            </div>
        </div>
        {dataFeedback.map((e) => {
                return (<div>
                <div className="px-4 relative">
                    <h1 className="text-4xl font-bold text-slate-700">{e.nama}</h1>
                    <div className="bg-white shadow-md rounded-md text-center px-4 pb-14 mt-4 pt-2">
                        <div className="flex justify-center">
                          <img className="rounded-full w-[70px]" src={
                              process.env.PUBLIC_URL+e.foto
                          } alt="" />
                        </div>
                        <h1 className="text-2xl">❤️❤️❤️❤️❤️</h1>
                        <span className="text-2xl text-primary flex ju">❝</span>
                        <p className="pb-2 text-base text-slate-800 tracking-tight">{e.pesan}</p>
                        <span className="text-2xl text-primary flex justify-end">❞</span>
                        <div className="flex justify-center">
                          <button className="absolute bottom-[-1rem] text-white bg-primary py-2 px-6 rounded-full">sangat puas</button>
                        </div>
                    </div>
                </div>
                <img className="w-full" src={garis} alt="" />
              </div>)
        })}
        <PostFeedback />
    </section>
  )
}
