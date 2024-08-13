function Home(){
    return (
        <div>
            <h1>Oi bia</h1>
            <h2>Aperte o botão para revelar o segredo</h2>
            <h2 id="conteudoPiada" hidden="true" >Tu és muito chataaaa!!!</h2>

            <button onClick={revelarPiada} style={{height: '20px'}}>
                Revelar segredo
            </button>
        </div>
    )
}

function revelarPiada(){
    var piada = document.getElementById("conteudoPiada")
    piada.hidden = false
}

export default Home;