import {Link} from 'react-router-dom'

export default function NavbarBottom() {
    return (
        <div className="shadow-lg border-t border-slate-600 lg:hidden py-2 fixed bottom-0 w-full bg-white">
            <div className="flex justify-between px-8">
                <div className="pl-2">
                    <Link to="/">
                        <img className="w-10" src={process.env.PUBLIC_URL+"assets/home.gif"} alt=""/>
                    </Link>
                </div>
                <div className="pl-2">
                    <Link to="/search">
                        <img className="w-10" src={process.env.PUBLIC_URL+"assets/search.gif"} alt=""/>
                    </Link>
                </div>
                <div className="pl-2">
                    <Link to="/about">
                        <img className="w-10" src={process.env.PUBLIC_URL+"assets/social-media.gif"} alt=""/>
                    </Link>
                </div>
                <div className="pl-2">
                    <Link to="/kontak">
                        <img className="w-10" src={process.env.PUBLIC_URL+"assets/mailing.gif"} alt=""/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
