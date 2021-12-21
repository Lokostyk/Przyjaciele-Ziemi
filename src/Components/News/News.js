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
            <div className="con">
                <p className="date">Dodano: 28-02-2017</p>
                <h2>Konkurs plastyczny Szanujmy drzewa</h2>
                <p className="preview">Konkurs plastyczny "Szanujmy drzewa" ogłosił w ramach działalności edukacyjnej Polski Klub Ekologiczny "Przyjaciele Ziemi". Uczestnicy mieli namalować plakat, którego treść zachęcałaby do szanowania drzew oraz zachęcała do większej troski o "zielone płuca". Rozstrzygnięcie nastąpiło 10 lutego 2016 roku.</p>
                <button className="showMore">Czytaj dalej</button>
            </div>
            {articleData.map(item=>{
                console.log(item)
                return <Article key={item.id} data={item}/>
            })}
        </section>
    )
}

export default News
