import React from 'react'
import { useEffect, useState } from 'react';
import Memes from '../components/Memes/Memes';
import { getAll } from '../http/memesAPI';
import '../styles/Memes.scss'
import { useRef } from 'react';
import SuperWord from '../components/UI/SuperWord';
import {useMemes} from '../hooks/useMemes';

const CheckMemes = () => {
    const [memes, setMemes] = useState([])
    const [load, setLoad] = useState(false)
    const [count, setCount] = useState(0)
    const [end, setEnd] = useState(false)
    const look = useRef()
    
    useMemes(
        memes, (m) => {setMemes(m)}, 
        load, (l) => {setLoad(l)}, 
        count, (c) => {setCount(c)},
        end, (end) => {setEnd(end)},
        look
    )
        
    return load && (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}>
            <h1>ALL MEMES</h1>
            <div>we have {count} Memes!</div>
            <Memes memes={memes} />
            <div ref={look} id="look" style={{width:'100%', background:'wheat'}}></div>
            {end ? <h2 style={{margin:'15px'}}>There are no more <SuperWord word='memes' />...</h2> : ''}
        </div>
    )
}

export default CheckMemes