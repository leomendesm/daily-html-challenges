import React, {Component} from 'react'
import data from '../data.json'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
class Challenges extends Component {
constructor(props){
    super(props)
    this.state = {
        data: {},
        fetched: false
    }
}
componentWillMount(){
    axios({
        method: 'get',
        url: 'https://pure-inlet-51612.herokuapp.com/',
        headers: {'mode': 'no-cors'}
    }
    ).then(res => this.setState({data: res.data, fetched: true}))
}
render () {
        if(this.state.fetched)
        return (
            <section className="challenge-holder">
                <img src={this.state.data[this.props.match.params.dif].img} target='_blank' alt="" />
                <div>
                    <a href={this.state.data[this.props.match.params.dif].url}> link para a imagem oficial</a>
                    <p>Após concluir o desafio, poste em alguma rede social como twitter e marque com a #DailyHTMLChallenge!</p>
                    <Link to="/"> voltar ao início </Link>
                </div>
            </section> )
        return (<div></div>)
    }
}

export default withRouter(Challenges)
