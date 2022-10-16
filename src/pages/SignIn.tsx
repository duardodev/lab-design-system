import { FormEvent, useState } from 'react';
import axios from 'axios';
import { Checkbox } from '../components/Checkbox';
import { Envelope, LockKey } from 'phosphor-react';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { TextInput } from '../components/TextInput';
import { Text } from '../components/Text';
import { Logo } from '../Logo';

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post('/sessions', {
      email: 'deiviteduardo87@gmail.com',
      password: '12345678'
    });

    setIsUserSignedIn(true);
  }

  return (
    <div className="w-screen h-screen bg-blur bg-no-repeat bg-cover text-gray-100 flex flex-col items-center justify-center">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite <span className="text-2xl text-purple-600">Lab</span>
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e começe a usar!
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className="w-full max-w-[400px] mt-10 flex flex-col items-stretch gap-4"
      >
        {isUserSignedIn && <Text>Login realizado!</Text>}

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
