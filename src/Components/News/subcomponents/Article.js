import React,{useState,useEffect} from 'react'

function Article({data}){
    const [more,setMore] = useState(false)
    
    useEffect(()=>{
        const article = document.querySelector(".articleContainer")
        if(more){
            article.style.maxHeight = "1000px"
        }else{
            article.style.maxHeight = "0px"
        }
    },[more])
    return (
        <div className='con'>
            <p className="date">Dodano: {data.Data}</p>
            <h2>{data.Tytul}</h2>
            <p className="preview">{data.Wstep}</p>
            {data.Rozwiniecie !== "" && data.Rozwiniecie !== null?
                <>
                    <div className='articleContainer'>
                        <hr/>
                        <pre className="article">{data.Rozwiniecie}</pre>
                        <img src={`${data.Zdjecia.data.attributes.url}`}/>
                    </div>
                    <button className="showMore" onClick={()=>setMore(!more)}>{more?"Zwiń":"Czytaj dalej"}</button>
                </>
                :""}
        </div>
    )
}

export default Article
