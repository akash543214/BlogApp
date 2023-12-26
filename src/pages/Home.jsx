import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import {useSelector} from 'react-redux'
import { Error } from '../components/Error'
import { ErrorPage } from '../components/ErrorPage';

function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (!authStatus) {
        return (
           <ErrorPage />
        )
    }
    return (
        <div className="container mx-auto p-4 h-screen">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
   
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
              </div>
  </div>
    )
}

export default Home