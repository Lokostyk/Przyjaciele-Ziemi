import React from 'react'

function Article({data}){

    return (
        <div className='con'>
            <p className="date">Dodano: {data.Data}</p>
            <h2>{data.Tytul}</h2>
            <p className="preview">{data.Wstep}</p>
            {data.Rozwiniecie !== "" && data.Rozwiniecie !== null?<button className="showMore">Czytaj dalej</button>:""}
        </div>
    )
}

export default Article
