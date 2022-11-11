import { Link } from 'react-router-dom'
import Carousel from './../Components/Carousel.js'

export default function Home() {
    return (<>
    <div className="pt-24">
        <Carousel />
    </div>
    <div className="container pt-24">
        <div className="px-4">
            <h1 className="text-5xl text-slate-600 font-bold">Surya Tech</h1>
            <h1 className="text-3xl tracking-widest font-normal text-slate-700 text-2xl">Teknik Komputer dan Jaringan</h1>
            <p className="pt-2 pb-4 text-base text-slate-800">Jasa installasi Windows, installasi and aktivasi software, pembuatan website, dan lain-lain.</p>
                <div className="flex pb-4">
                    <div className="avatar-group -space-x-6">
                      <div className="avatar">
                        <div className="w-12">
                          <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-12">
                          <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-12">
                          <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-12">
                          <img src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                      </div>
                    </div>
                    <div>
                        <h1>4 team support</h1>
                        <Link to="/about">view more....</Link>
                    </div>
                </div>
            <Link to="/layanan" className="text-white font-semibold px-6 py-2 rounded-full bg-primary">Layanan</Link>
        </div>
    </div>
    </>)
}
