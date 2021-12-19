import "./news.scss"
import React from 'react'

function News() {
    return (
        <section className="newsContainer">
            <h1>Aktualności</h1>
            <div className="con">
                <p className="date">Dodano: 28-02-2017</p>
                <h2>Konkurs plastyczny Szanujmy drzewa</h2>
                <p className="preview">Konkurs plastyczny "Szanujmy drzewa" ogłosił w ramach działalności edukacyjnej Polski Klub Ekologiczny "Przyjaciele Ziemi". Uczestnicy mieli namalować plakat, którego treść zachęcałaby do szanowania drzew oraz zachęcała do większej troski o "zielone płuca". Rozstrzygnięcie nastąpiło 10 lutego 2016 roku.</p>
            </div>
            <button className="showMore">Czytaj dalej</button>
        </section>
    )
}

export default News
