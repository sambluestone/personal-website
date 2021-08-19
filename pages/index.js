import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/nav'
import Section from '../components/section'

export default function Home() {
  return (
    <div>
      <Section id="about">
          <p>About</p>
      </Section>
      <Section id="work">
          <p>Work Experience</p>
      </Section>
      <Section id="projects">
          <p>Projects</p>
      </Section>
      <Section id="contact">
          <p>Contact</p>
      </Section>
    </div>
  )
}
