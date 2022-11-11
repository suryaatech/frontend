import React from 'react'
import axios from 'axios'

export default function Api() {
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/layanan/2/")
        .then((response) => {
            setPost(response.data)
        })
    }, [])
    if (!post) return null
    return (
	<div className="pt-24">
        <h1 className="text-5xl text-slate-600">{ post.judul }</h1>
	</div>
    )
}
