import Link from 'next/link';

function Home(){
    return (<div>
        <h1>Home</h1>
        <Link href="/sobre">
        <a>Acessar a página Sobre</a>
        </Link><br></br>
        <Link href="/tempo" >
        <a>Acessar a página Tempo</a>
        </Link>
    </div>)
}
export default Home