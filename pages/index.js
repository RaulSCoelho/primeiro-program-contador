import Link from 'next/link'

function Home() {
    return (<div>
        <header>
            <h1>Contador</h1>
        </header>
        <section>
            <div id="divspace">
                Início: <input type="number" name="num1" id="num1"></input>
            </div>
            <div id="divspace">
                Fim: <input type="number" name="num2" id="num2"></input>
            </div>
            <div id="divspace">
                Contagem: <input type="number" name="cont" id="cont"></input>
            </div>
            <div id='btn'>
                <input id="button" type="button" value="Contar"></input>
            </div>
            <div id="res">

            </div>
        </section>
        <footer>
            <p>&copy; RaulSCoelho</p>
        </footer>
    </div>)
}

export default Home