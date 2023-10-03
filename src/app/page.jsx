import Section1 from '@/components/Section1'
import Hero from '@/components/index/Hero'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative w-full flex flex-col">

      <Hero />
      {/* <Link href={"/about"} target='_blank'>about</Link>

      <Section1 isLeft={2}>
        ab
      </Section1>
      <Section1 isLeft={50}>
        ab
      </Section1>
      <Section1 isLeft={2}>
        ab
      </Section1>
      <Section1 isLeft={100}>
        ab
      </Section1>
      
      <section>
        section 2 with content
      </section> */}
    </main>
  )
}
