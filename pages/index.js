function Home(){
    return (
        <div>
            <h1>Oi gabriela</h1>
            <h2>Vou contar-lhe uma piada: </h2>
            <h2>Por que os pássaros voam para o sul?</h2>
            <h2 id="conteudoPiada" hidden="true" >Porque é muito longe para ir andando!</h2>

            <button onClick={revelarPiada} style={{height: '20px'}}>
                Revelar piada
            </button>
        </div>
    )
}

function revelarPiada(){
    var piada = document.getElementById("conteudoPiada")
    piada.hidden = false
}

export default Home;