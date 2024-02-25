'use client';

import Lottie from 'lottie-react';
import ExternalLink from '@/components/externalLink';

import Appdeveloper from '@/animations/app-developer.json';

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col justify-between h-screen space-y-5">
      <header className="flex justify-between items-center p-3">
        <h1 className="scroll-m-20 text-2xl font-bold tracking-tight">
          Bruno Aurichio
        </h1>
        <nav>
          <ul className="flex gap-5 items-center">
            <li>
              <ExternalLink href="https://www.linkedin.com/in/brunoesposito/">
                Linkedin
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://github.com/brunoesposito">
                Github
              </ExternalLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex items-center justify-between p-3 max-lg:flex-col lg:mx-auto lg:max-w-[900px]">
        <div className="space-y-5 flex-1 max-lg:text-center">
          <h2 className="scroll-m-20 font-bold text-2xl tracking-tight">
            Hi, I`m Bruno, a{' '}
            <span className="text-blue-600">mobile developer</span> with a
            passion for react
          </h2>
          <div>
            <ul>
              <li>
                Tech lead at <b>Voltz</b>
              </li>
              <li>
                Previously work with <b>Comunica.in</b> and{' '}
                <b>Platform Builders</b>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 max-w-[600px]">
          <Lottie animationData={Appdeveloper} />
        </div>
      </main>
      <footer className="text-center p-3">
        <small className="text-sm font-medium leading-none text-gray-400">
          Bruno Aurichio Esposito @ {year}
        </small>
      </footer>
    </div>
  );
}
