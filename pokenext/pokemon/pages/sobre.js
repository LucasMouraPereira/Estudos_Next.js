import Link from 'next/link';

function Sobre() {
    return (
    <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/sobre">
          <a>Sobre o projeto</a>
        </Link>
    </div>
    )
}

export default Sobre;