import "./news.scss"
import React, { useEffect,useState } from 'react'

import {ADMIN_LINK} from "../../_admin"
import Article from "./subcomponents/Article"
const axios = require("axios")

function News() {
    const [articleData,setArticleData] = useState([])

    useEffect(()=>{
        axios.get(`${ADMIN_LINK}/api/artykuls?populate=*`).then( res=>{
            const data = res.data.data.reduce((arr,item)=>{
                arr.push({...item.attributes,id:item.id})
                return arr
            },[])
            setArticleData(data)
        })
    },[])
    return (
        <section className="newsContainer">
            <h1>Aktualności</h1>
            {articleData.map(item=>{
                console.log(item)
                return <Article key={item.id} data={item}/>
            })}
        </section>
    )
}

export default News
