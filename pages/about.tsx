import Head from 'next/head'
import Header from '@/components/header'
import Container from '@/components/container'

const About = () => {
  return (
    <>
      <Head>
        <title>LAMF5 | Sobre</title>
        <meta
          name="description"
          content="Fundada em 2019 por alunos da Universidade Federal de Viçosa (UFV), a LAMF5 (Liga Acadêmica de Mercado Financeiro), tem como principal objetivo: Desenvolver estudos e pesquisas acadêmicas de alta aplicabilidade, e a partir disso, produzir conteúdo para toda sociedade."
        />
        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/blog/logo/logo.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/blog/logo/logo.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/blog/logo/logo.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/assets/blog/logo/logo.png"
            color="#FFFFFF"
          />
          <link rel="shortcut icon" href="/assets/blog/logo/logo.png" />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
          <meta name="theme-color" content="#FFFFFF" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </Head>
      <Container>
      <Header />
        <article className="mb-32 about">

          <h1 className="aboutTitle">Sobre</h1>

          Fundada em 2019 por alunos da <a style={{ color: '#3b4f66', textDecoration: 'underline' }} href="https://www.ufv.br/">Universidade Federal de Viçosa (UFV)</a>, a <b>LAMF5</b> (Liga Acadêmica de Mercado Financeiro), tem como principal objetivo: Desenvolver estudos e pesquisas acadêmicas de alta aplicabilidade, e a partir disso, produzir conteúdo para toda sociedade.<br/><br/>

          <h1 className="aboutTitle">Estrutura organizacional</h1>

          <div className="presidencia">
            <img src="/assets/blog/authors/alice.jpeg" className="profile" alt="Alice Másala" />
            <div className="group">
              <h1 className="aboutTitle">Presidência</h1>
              <p>Alice Gonçalves Másala</p>
            </div>
          </div>

          <div className="presidencia">
            <img src="/assets/blog/authors/breno.jpeg" className="profile" alt="Breno Schiavon" />
            <div className="group">
              <h1 className="aboutTitle">Gestão de pessoas</h1>
              <p>Breno Schiavon</p>
            </div>
          </div>

          <div className="presidencia">
            <img src="/assets/blog/authors/dalbert.jpeg" className="profile" alt="Dalbert Viana Gregório" />
            <div className="group">
              <h1 className="aboutTitle">Diretoria de comunicação</h1>
              <p>Dalbert Viana Gregório</p>
            </div>
          </div>

          <div className="presidencia">
            <img src="/assets/blog/authors/maciel.jpeg" className="profile" alt="Maciel Maçal Neto" />
            <div className="group">
              <h1 className="aboutTitle">Diretoria de projetos internos</h1>
              <p>Maciel Maçal Neto</p>
            </div>
          </div>


        </article>
      </Container>
    </>
    );
  }
  
  export default About