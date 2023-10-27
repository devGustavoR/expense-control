import { AiOutlineUser } from "react-icons/ai";
import { TbPassword } from "react-icons/tb";

export function Login() {
  return (
    <>
      <main>
        <section className="ml-[38%] mt-[12.5%] flex h-96 w-96 flex-1 flex-col items-center justify-center rounded-xl border-2 border-gray-50">
          <div>
            <h1 className="flex items-center justify-center font-sans text-lg uppercase tracking-normal">
              Seja Bem-vindos
            </h1>
            <p className="text-center">
              Onde a economia do seu dinheiro é a nossa alegria
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="mr-2 mt-3 flex items-center justify-center">
              <AiOutlineUser size="2rem" />
            </div>
            <input
              type="text"
              className="mt-4 rounded-xl border-[3px] border-purple-400 text-gray-800 placeholder:text-sm placeholder:text-gray-200/50"
              placeholder="Usuário/Email"
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="mr-2 mt-3 flex items-center justify-center">
              <TbPassword size="2rem" />
            </div>
            <input
              type="password"
              className="mt-4 rounded-xl border-[3px] border-purple-400 text-gray-800 placeholder:text-sm placeholder:text-gray-200/50"
              placeholder="Senha"
            />
          </div>
          <button className="mt-3 rounded-2xl bg-white p-3 text-gray-700 hover:bg-gray-100 hover:text-purple-500">
            Login
          </button>
        </section>
      </main>
    </>
  );
}
