// import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem';

import useFetchGifs from "../hooks/useFetchGifs"

const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeInUp">{ category }</h3>
            { loading && <p className="animate__animated animate__flash">Loading...</p> }
            <div className="card-grid">
                {
                    data.map((img) =>
                        <GifGridItem
                            key={ img.id }
                            { ...img }
                        />
                    )
                }
            </div>
        </>
    )
}

export default GifGrid
