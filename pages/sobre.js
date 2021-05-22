import Link from 'next/link';

function Sobre(){
    return (<div>
        <h1>Sobre</h1>
        <Link href="/">
        <a>Acessar a página Home</a>
        </Link><br></br>
        <Link href="/tempo">
        <a>Acessar a página Tempo</a>
        </Link>
    </div>)
}
export default Sobre