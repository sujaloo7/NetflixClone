import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import "../index.css";


const Row = ({ title, fetchURL }) => {
    const [movies, setMovies] = useState([])
    const [like, setLike] = useState(false)

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        }
        )
    }, [fetchURL]
    )
    return (
        <>
            <h2 className='text-white font-bold md:text-xl pl-5 mt-10'>{title}</h2>
            <div className='relative flex items-center pl-5'>
                {/* <ChevronLeft className='bg-white rounded-full absolute opacity-50 hover-opacity-100 cursor-pointer z-10 hidden' size={40} /> */}
                <div id={'slider'} className='slider w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) => (
                        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} />
                            <div className='absolute top-0 left-0 w-full h-full  hover:bg-black/80 opacity-0 hover:opacity-100 text-white '>
                                <p className='white space-normal text-xs md:text-sm font-bold flex justify-center item-center h-full text-center mt-16'>{item?.title}</p>
                                <p>
                                    {like ? <Heart className='absolute top-4 left-4 text-gray-300' /> : <Heart className='absolute top-4 left-4 text-gray-300' />}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
                <ChevronRight />
            </div>
        </>
    )
}

export default Row