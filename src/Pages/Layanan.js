import React from 'react'
import axios from 'axios'
import { faClock, faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Layanam() {
    const [posts, setPosts] = React.useState(null);
    const [layanan, setLayanan] = React.useState(1);
    React.useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/layanan/")
        .then((response) => {
	    let hasil = response.data.results;
            setPosts(hasil);
        })
    }, [])
    if (!posts) return null
    return (<>
        <div className="container pt-24 pb-12">
	    <div id="iniModal" className="py-4">
		<input type="checkbox" id="my-modal-3" className="modal-toggle" />
		<div className="modal">
		    <div className="modal-box relative">
		        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
		        <h3 className="text-3xl text-slate-700 font-bold">{layanan.judul}</h3>
			<p className="text-base text-primary"><FontAwesomeIcon icon={faTags} /> {layanan.kategori}</p>
			<img src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
		        <p className="py-4">{layanan.isi}</p>
			<div class="py-6">
                	    <p class="text-xl font-bold text-gray-500 dark:text-gray-400">Keuntungan menggunakan jasa kami?</p>
                	    <ul class="my-2 space-y-3">
                                <li>
                        	    <p class="p-3 text-base text-gray-500 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            		1. Ahli dalam bidangnya
                        	    </p>
                    	        </li>
                    	        <li>
                        <p class="p-3 text-base text-gray-500 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            2. harga sangat terjangkau
                        </p>
                    	        </li>
              <li>
                        <p class="p-3 text-base text-gray-500 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            3. proses pengerjaan cepat
                        </p>
                    </li>
              <li>
                        <p class="p-3 text-base text-gray-500 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                           4. amanah dan tanggung jawab
                        </p>
                    </li>
                    	    </ul>
			</div>
			<h2 className="text-xl text-slate-600">Apa yang di dapat?</h2>
			<p className="text-sm text-slate-700">Setelah menggunakan jasa kami, anda akan mendapatkan windows yang siap pakai dan juga free beberapa software seperti, office, corel, winrar dan lain-lain.</p>
			<div className="py-6">
			    <h1 className="text-xl text-bold text-slate-700">Note</h1>
			    <p className="text-sm text-slate-800">Jika anda menggunakan jasa kami, free garansi selama 1 minggu.</p>
			</div>
<div>
    <p className="text-sm font-bold text-gray-400 line-through">Rp. 100.000</p>
    <p className="text-3xl font-bold text-gray-500 pb-2">Rp. 50.000</p>
    <button className="px-6 py-2 text-white bg-green-700 rounded-md">pesan via whatsapp</button>
    <button className="px-6 py-2 text-white bg-primary rounded-md">images</button>
</div>
		    </div>
		</div>
	    </div>	
            <div className="">
                <h1 data-aos="zoom-in" class="text-7xl text-primary font-bold strokeme">Layanan</h1>
                <p className="tracking-tight text-2xl font-normal text-base text-slate-500">Butuh bantuan tentang install windows??</p>
                <h2 className="text-3xl font-semibold text-slate-600">Bawa ketempat kami!!!</h2>
            </div>
            <div>
                { posts.map((post) => {
                    return (<>
                        <div className="rounded-md px-4 py-4 bg-white border-2 border-slate-100 shadow-md mt-4">
                            <div>
                                <h1 data-aos="zoom-in" className="font-bold text-slate-600 text-3xl">{post.judul}</h1>
                                <p className="text-base text-sate-700">{post.isi}</p>
                                <button data-aos="fade-left" className="mt-6 px-4 py-1 bg-primary rounded-full font-bold text-white" data-id={post.id}
				onClick={function(){
let ids = post.id
axios.get(`http://127.0.0.1:8000/api/layanan/${ids}/`)
.then(res => {
  let result = res.data
  setLayanan(result)
})

				}}>
				    <label htmlFor="my-modal-3">view details</label>
				</button>
                                <hr className="border-slate-800 mt-2" />
                                <div className="flex py-2">
                                    <div>
                                        <img className="w-16 rounded-full" src="https://placeimg.com/192/192/people" alt="" />
                                    </div>
                                    <div className="pl-2">
                                        <p className="text-primary text-2xl">{post.author}</p>
                                        <p className="text-slate-600 text-2xl tracking-tight">{post.jurusan}</p>
                                    </div>
                                </div>
                                <div className="flex text-slate-800">
                                    <p className="text-sm"><FontAwesomeIcon icon={ faClock } /> {post.publsih}</p>
                                    <p className="text-sm pl-2"><FontAwesomeIcon icon={ faTags } /> {post.kategori}</p>
                                </div>
                            </div>
                        </div>
                    </>)
                }) }
            </div>
	</div> 
    </>)
}





