import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto w-full max-w-3xl py-8">
      <header className="flex justify-between items-center bg-slate-800 h-20 px-3">
        <Image src={logo} alt="Meu blog" />

        <nav className="flex gap-4">
          <Link href="#">Entrar</Link>
          <Link href="#">Cadastrar-se</Link>
        </nav>
      </header>

      <main className="mt-10 space-y-4">
        <h1 className="text-2xl font-bold">Artigos</h1>
        <article className="space-y-4">
          {/* Quando utilizamos a tag article o header e o footer podem ser utilizados para descrever melhor a estrutura do article nao necessariamente criando um landmark */}
          <header className="space-y-2">
            <h2 className="text-xl font-bold">
              Por que aprender programação em 2026?
            </h2>
          </header>
          <p>
            A programação vai muito além de escrever código. Ela desenvolve
            raciocínio lógico, resolução de problemas e pensamento crítico —
            habilidades valorizadas em qualquer carreira.
          </p>
          <p>
            Além disso, o mercado de tecnologia segue aquecido, com alta demanda
            por desenvolvedores, designers e profissionais digitais. Aprender
            programação hoje é abrir portas para atuar remotamente, criar seus
            próprios produtos e participar ativamente da transformação digital.
          </p>
        </article>
        <article className="space-y-4">
          {/* Quando utilizamos a tag article o header e o footer podem ser utilizados para descrever melhor a estrutura do article nao necessariamente criando um landmark */}
          <header className="space-y-2">
            <h2 className="text-xl font-bold">
              Como a inovação impulsiona pequenos negócios
            </h2>
          </header>
          <p>
            Inovar não significa criar algo totalmente novo, mas encontrar
            formas mais eficientes de resolver problemas. Pequenas empresas que
            adotam soluções digitais conseguem otimizar processos, reduzir
            custos e melhorar a experiência do cliente.
          </p>
          <p>
            Ferramentas simples como sistemas de gestão, automação de
            atendimento e presença digital já fazem uma grande diferença. A
            inovação está acessível — basta saber por onde começar.
          </p>
        </article>
      </main>

      <footer className="flex h-20 justify-center items-center mt-10 bg-slate-800">
        <nav className="flex gap-4" aria-label="Rodape">
          <Link href="#">Termos de uso</Link>
          <Link href="#">Termos de uso</Link>
        </nav>
      </footer>
    </div>
  );
}

// landmarks sao pontos chaves que servem para acessibilidade, ou seja nao devemos duplicar o mesmo landmark
