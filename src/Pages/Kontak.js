import $ from 'jquery';

export default function Kontak() {
    const nama = $("#nama").val()
    const email = $("#email").val()
    const pesan = $("#pesan").val()
    const data = `mailto:hidhzdev@gmail.com?subject=layanan&body=${pesan}`
    return (
        <div class="container pt-24">
            <div class="px-4">
                <h1 class="text-slate-600 font-bold text-4xl">Information Aja</h1>
                <p class="text-sm text-slate-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus molestiae dolore fuga voluptates suscipit reiciendis, ullam porro atque.</p>
            </div>
            <div class="overflow-hidden py-24">
            <div class="w-full">
                <div class="w-full self-center px-4">
                    <h2 data-aos="fade-left" class="font-medium text-primary text-2xl">Hubungi Kami</h2>
                    <p data-aos="zoom-in-right" class="font-medium text-secondary2 mb-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                 </div>
            </div>
                <form>
                    <div class="w-full lg:w-2/3 mx-auto">
                        <div class="w-full px-4 mb-8">
                            <label data-aos="zoom-in-out" for="nama" class="text-base font-bold text-primary">Nama</label>
                            <input data-aos="zoom-out-left" class="w-full bg-slate-200 text-slate-500 p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" type="text" name="nama" id="nama" placeholder="Masukan nama anda"/>
                        </div>
                        <div class="w-full px-4 mb-8">
                            <label data-aos="zoom-in-out" for="email" class="text-base font-bold text-primary">Email</label>
                            <input data-aos="zoom-out-left" class="w-full bg-slate-200 text-slate-500 p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" type="email" name="email" id="email" placeholder="Masukan email anda"/>
                        </div>
                        <div class="w-full px-4 mb-8">
                           <label data-aos="zoom-in-out" for="pesan" class="text-base font-bold text-primary">Pesan</label>
                            <textarea data-aos="zoom-out-left" class="w-full bg-slate-200 text-slate-500 p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32" type="text" name="pesan" id="pesan" placeholder="Masukan pesan anda"></textarea>
                        </div>
                        <div class="w-full px-4">
                            <a data-aos="zoom-in-out" class="text-base font-bold bg-primary px-10 py-2 text-white hover:bg-sky-900 rounded-full w-full"
                            href={data}
                            >Kirim</a>
                        </div>
                    </div>
                </form>
        </div>
                    <div class="px-4 py-12 text-md text-slate-600">
                    <h1 class="text-slate-700 font-bold text-2xl">Kontak Kami</h1>
                    <h1>+6285859813922</h1>
                    <h1>hidhzdev@gmail.com</h1>
                    <p>Jl. Raya Mranggen, purwoasri, Kediri
                        <span>Jawa timur</span>
                    </p>
                </div>
        </div>       
    )
}
