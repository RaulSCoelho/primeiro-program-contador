import Link from 'next/link';

function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    
    return (
    <div>
        <h1>Tempo</h1>
        <div>{dynamicDateString} (dinâmico)</div><br></br>
        <div>{props.staticDateString} (estático)</div><br></br>
        <Link href="/">
        <a>Acessar a página Home</a>
        </Link><br></br>
        <Link href="/sobre">
        <a>Acessar a página Sobre</a>
        </Link>
    </div>
    )
}

export function getStaticProps(){
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return{
        props: {
            staticDateString
        },
        revalidate: 1
    }
}

export default Tempo