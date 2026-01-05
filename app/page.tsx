import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto w-full max-w-3xl py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Meu Blog</h1>

        <div className="flex gap-4">
          <Link href="#">Entrar</Link>
          <Link href="#">Cadastrar-se</Link>
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <h2>Get started in seconds</h2>
        <h4>Deploy Next.js to Vercel</h4>
        <p>
          Vercel is a frontend cloud from the creators of Next.js, making it
          easy to get started with Next.js quickly.
        </p>
        <p>
          Jumpstart your Next.js development with pre-built solutions from
          Vercel and our community.
        </p>
      </div>
    </div>
  );
}
