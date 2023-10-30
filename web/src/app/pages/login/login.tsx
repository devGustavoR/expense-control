import Image from 'next/image'
import { AiOutlineUser } from 'react-icons/ai'
import { TbPassword } from 'react-icons/tb'
import Finance from './img/Finance.svg'

export function Login() {
  return (
    <>
      <main>
        <section className=" flex  flex-1 items-center justify-center rounded-xl">
          {/* Left */}
          <Image
            src={Finance}
            width={700}
            height={700}
            alt="ImageTest"
            className="pointer-events-none"
          />
          {/* Right */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="ml-3 flex items-center justify-center font-sans text-xl uppercase tracking-normal">
              Seja Bem-vindos
            </h1>
            <p className="text-center">
              Onde a economia do seu{' '}
              <a className="underline decoration-purple-400">dinheiro</a> é a
              nossa alegria
            </p>
            <div className="flex items-center justify-center">
              <div className="mr-2 mt-3 flex items-center justify-center">
                <AiOutlineUser size="2rem" />
              </div>
              <input
                type="text"
                className="mt-4 rounded-md border-[2px] border-purple-400 font-monu text-lg text-gray-800 placeholder:text-sm placeholder:text-gray-200/50"
                placeholder="Usuário/Email"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="mr-2 mt-3 flex items-center justify-center">
                <TbPassword size="2rem" />
              </div>
              <input
                type="password"
                className="placeholder: mt-4 rounded-md border-[2px]  border-purple-400 text-lg text-gray-800 placeholder:text-sm placeholder:text-gray-200/50"
                placeholder="Senha"
              />
            </div>
            <div>
              <a
                href=""
                className="float-right mt-5 text-sm text-purple-400 hover:text-purple-300"
              >
                Esqueceu a senha?
              </a>
            </div>
            <button className="mt-3 rounded-2xl bg-white p-3 text-gray-700 hover:bg-slate-100 hover:text-purple-400">
              Login
            </button>
          </div>
        </section>
      </main>
    </>
  )
}
