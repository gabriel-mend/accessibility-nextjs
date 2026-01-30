"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpenModal) {
      modalRef.current?.focus();
    }
  }, [isOpenModal]);

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
          ß
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
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => setIsOpenModal(true)}
          >
            Termos de uso
          </button>
        </nav>
      </footer>

      {isOpenModal && (
        <div
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
          aria-controls="modalCloseButton"
          aria-modal="true"
          ref={modalRef}
          className="fixed h-72 space-y-2 bg-white inset-x-0 top-1/2 -translate-y-1/2 mx-auto w-96 flex flex-col justify-center items-center"
          tabIndex={-1}
        >
          <h1 className="text-black text-2xl font-bold" id="modalTitle">
            Termos de uso
          </h1>
          <p className="text-black" id="modalDescription">
            Este modal e feito com useState e Ref
          </p>
          <button
            type="button"
            className="p-3 text-white bg-gray-900 cursor-pointer"
            id="modalCloseButton"
            onClick={() => setIsOpenModal(false)}
          >
            Fechar modal
          </button>
        </div>
      )}
    </div>
  );
}
