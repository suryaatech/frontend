import React from 'react';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function PostFeedback(){
  const [nama, setNama] = React.useState("");
  const [pesan, setPesan] = React.useState("");
  const [nilai, setNilai] = React.useState("5");
  const [foto, setFoto] = React.useState("assets/default_avatar_feedback.png");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nama !== "") {
      await addDoc(collection(db, "Feedback"), {
        nama,
        pesan,
        nilai,
        foto,
        completed: false,
      });
    }
  }
  return (
    <div class="container shadow-md pt-24">
        <div class="px-4 py-6">
            <div>
                <h1 class="text-slate-700 text-2xl font-bold">Beri Ulasan!!!</h1>
                <p class="text-slate-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div class="pt-4">
                    <label class="text-slate-600 font-bold" for="nama">Nama</label>
                    <input
                        value={nama} 
                        onChange={(e) => setNama(e.target.value)}
                        id="nama" type="text" placeholder="masukan nama...." className="input w-full max-w-xs" 
                    />
                </div>
                <div class="flex justify-center pt-4">
                    <div class="shadow-md rounded-full px-2 py-2 border-2 border-rose-600 mr-2">
                        <h1 class="text-2xl">❤️</h1>
                    </div>
                    <div class="shadow-md rounded-full px-2 py-2 border-2 border-rose-600 mr-2">
                        <h1 class="text-2xl">❤️</h1>
                    </div>
                    <div class="shadow-md rounded-full px-2 py-2 border-2 border-rose-600 mr-2">
                        <h1 class="text-2xl">❤️</h1>
                    </div>
                    <div class="shadow-md rounded-full px-2 py-2 border-2 border-rose-600 mr-2">
                        <h1 class="text-2xl">❤️</h1>
                    </div>
                    <div class="shadow-md rounded-full px-2 py-2 border-2 border-rose-600 mr-2">
                        <h1 class="text-2xl">❤️</h1>
                    </div>
                </div>
                <div class="py-4">
                    <h2 class="font-bold text-slate-600">Saran or Kritik!</h2>
                    <textarea
                        value={pesan}
                        onChange={(e) => setPesan(e.target.value)}
                        id="pesan" rows="3" cols="35" placeholder="tulis saran atau pesan anda disini...">
                    </textarea>
                    <p class="pt-2 text-slate-600">foto/gambar anda | not required.</p>
                    <input id="foto" type="file"/>
                    <input 
                        type="hidden"
                        value={foto}
                        onChange={(e) => setFoto(e.target.value)}
                    />
                </div>
                <div class="flex">
                    <button class="text-white font-bold px-6 py-1 rounded-md bg-primary hover:bg-sky-800">post feedback</button>
                    <button class="ml-4 text-white font-bold px-6 py-1 rounded-md bg-slate-800">cancel</button>
                </div>
            </form>
        </div>
    </div>
  )
}


