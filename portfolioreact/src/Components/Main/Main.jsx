import React from 'react'
import { Hero } from '../Hero/Hero'
import { Skills } from '../Skills/Skills'
import { Projects } from '../Projectp/Projects'
import { About } from '../About/About'
import { Contact } from '../Contact/Contact'

export const Main = () => {
  return (
    <main>

      <section id='hero'>
        <Hero/>
      </section>

      <section id='skills'>
          <Skills/>
      </section>

      <section id='projects'>
          <Projects/>
      </section>

      <section id='about'>
          <About/>
      </section>

      <section id='contact'>
        <Contact/>
      </section>

    </main>
  )
}