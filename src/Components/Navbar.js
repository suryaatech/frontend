import { Link } from 'react-router-dom'
import logo from './../logo.png'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Navbar() {
    const MySwal = withReactContent(Swal)

    const readSwal = () => {
       MySwal.fire({
          title: 'search apapun itu...',
          input: 'text',
	  confirmButtonText: 'Cari',
	  showLoaderOnConfirm: true,
	  allowOutsideClick: () => !Swal.isLoading()
	}).then((result) => {
	  if (result.isConfirmed){
	      window.open(`https://yandex.com/search/touch/?text=${result.value}`)
	  }
	})
    }



    return (<>
    <div className="navbar fixed z-[999]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost bg-primary rounded-md text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/layanan">Layanan</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
	<li><Link to="/about">About</Link></li>
	<li><Link to="/kontak">Kontak</Link></li>
      </ul>
    </div>
    <button onClick={function() {
	readSwal();	
    }} className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
  <div className="navbar-end">
    <img src={logo} alt="" />
  </div>
</div>
    </>)
}
