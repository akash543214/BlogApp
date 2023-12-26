import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    

  return(
    <Link to={`/post/${$id}`}>

    <div className="w-[300px] rounded-md border">
      <img
       src={appwriteService.getFilePreview(featuredImage)} 
       alt={title}
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-md font-semibold">{title}</h1>
        <p className="mt-3 text-sm text-gray-600">
        
        </p>
        <button
          type="button"
          className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
    </Link>

  )
}
export default PostCard