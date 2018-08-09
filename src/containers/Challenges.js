import React from 'react'
import data from '../data.json'
import { Link } from 'react-router-dom'
const Challenges = ({ match }) => (
    <section className="challenge-holder">
            <img src={data[match.params.dif.toLowerCase()].img} target='_blank' alt="" />
            <div>
                <a href={data.url}> link para a imagem oficial</a>
                <p>Após concluir o desafio, poste em alguma rede social como twitter e marque com a #DailyHTMLChallenge!</p>
                <Link to="/"> voltar ao início </Link>
            </div>
    </section>
)

export default Challenges
