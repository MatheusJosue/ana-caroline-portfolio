import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Sobre from '@/components/Sobre'
import Servicos from '@/components/Servicos'
import Galeria from '@/components/Galeria'
import Depoimentos from '@/components/Depoimentos'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero nome="Ana Caroline" subtitulo="Tosadora Profissional" />
      <Sobre />
      <Servicos />
      <Galeria />
      <Depoimentos />
      <Footer />
    </main>
  )
}
