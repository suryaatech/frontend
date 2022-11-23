import React from 'react';
import { db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function PostFeedback(){
  // variabel ulasan
  const [nilai, setNilai] = React.useState("5");
  const [nama, setNama] = React.useState("");
  const [pesan, setPesan] = React.useState("");
  const [foto, setFoto] = React.useState("assets/default_avatar_feedback.png");
  
  // Sweetalert
  const MySwal = withReactContent(Swal)
  const PostSwal = () => {
  const Toast = MySwal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: 'Ulasan ditambahkan!!!'
    })

  }
  
  // Post data ke firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nama !== "") {
      await addDoc(collection(db, "Feedback"), {
        nama,
        pesan,
        nilai,
        foto,
        completed: false,
      }).then(() =>  {
          PostSwal();
      })
    }
  }
  
  // Bintang klik
    const bintangs = [...document.getElementsByClassName("bintang")];
    let i;
    const bintangon = "bintang text-4xl text-yellow-300"
    const bintangoff = "bintang text-4xl"
    bintangs.forEach((bintang) => {
      bintang.addEventListener('click',function(){
        i = bintangs.indexOf(bintang);
        if ( bintang.className.indexOf(bintangoff) !== -1){
          setNilai(i+1)
          for (i; i >= 0; --i) bintangs[i].className = bintangon;
        } else{
          for (i; i < bintangs.length; ++i) bintangs[i].className = bintangoff;
        } 
      alert(23)
      });
      
    });
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
                    <div class="px-2 mr-2">
                        <h1 class="text-4xl bintang hover:text-yellow-300"><FontAwesomeIcon icon={ faStar } /></h1>
                    </div>
                    <div class="px-2 mr-2">
                        <h1 class="text-4xl bintang hover:text-yellow-300"><FontAwesomeIcon icon={ faStar } /></h1>
                    </div>
                    <div class="px-2 mr-2">
                        <h1 class="text-4xl bintang hover:text-yellow-300"><FontAwesomeIcon icon={ faStar } /></h1>
                    </div>
                    <div class="px-2 mr-2">
                        <h1 class="text-4xl bintang hover:text-yellow-300"><FontAwesomeIcon icon={ faStar } /></h1>
                    </div>
                    <div class="px-2 mr-2">
                        <h1 class="text-4xl bintang hover:text-yellow-300"><FontAwesomeIcon icon={ faStar } /></h1>
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

