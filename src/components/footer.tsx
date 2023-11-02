import { Archivo } from "next/font/google"
const archivo = Archivo({subsets: ['latin'], weight: ['400']});

export default function Footer() {
    return (
        <footer>
            <p className={`${archivo.className} w-full small text-center p-4 bg-[#131313] text-[#ffffff]`}>
                Copyright © 2023 Renato Fernandes. Todos direitos reservados.
            </p>
        </footer>
    )
}