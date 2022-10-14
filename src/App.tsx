import { Envelope, LockKey } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';

import { Logo } from './Logo';
import './styles/global.css';

export function App() {
  return (
    <div className="w-screen h-screen bg-blur bg-no-repeat bg-cover text-gray-100 flex flex-col items-center justify-center">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e começe a usar!
        </Text>
      </header>

      <form className="w-full max-w-[400px] mt-10 flex flex-col items-stretch gap-4">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <LockKey />
            </TextInput.Icon>

            <TextInput.Input type="password" id="password" placeholder="********" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembra de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="mt-8 flex flex-col items-center gap-4">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200 transition-colors">
            Esqueçeu sua senha?
          </a>
        </Text>

        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200 transition-colors">
            Não possui uma conta? Cria uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
