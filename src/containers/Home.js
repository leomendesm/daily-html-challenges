import React from 'react'
import Card from '../components/Card'
const Home = () => (
    <section className="container">
        <Card color="purple" description="Iniciante" />
        <Card color="pinkpurple" description="Intermediário" />
        <Card color="pink" description="Avançado" />
        {/* <Card color="orange" description="Iniciante" />
        <Card color="yellow" description="Intermediário" /> */}
    </section>
)

export default Home