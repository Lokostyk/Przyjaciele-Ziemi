import "./news.scss"
import React, { useEffect,useState } from 'react'

import {ADMIN_LINK} from "../../_admin"
import Article from "./subcomponents/Article"
import Loader from "../Other/Loader"
const axios = require("axios")

function News() {
    const [articleData,setArticleData] = useState([])

    useEffect(()=>{
        axios.get(`${ADMIN_LINK}/api/artykuls?populate=*`).then(res=>{
            res.data.data.forEach(item=>{
                const data = {...item.attributes,id:item.id}
                setArticleData((prev)=>[...prev,data])
            })
        })
    },[])
    return (
        <section className="newsContainer">
            <h1>Aktualności</h1>
            {articleData.length === 0?
                <Loader />:
                <>
                {articleData.map(item=>{
                    return <Article key={item.id} data={item}/>
                })}
                </>
            }
        </section>
    )
}

export default News
