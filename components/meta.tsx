import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://lamf5.s3-sa-east-1.amazonaws.com/logo/logo.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://lamf5.s3-sa-east-1.amazonaws.com/logo/logo.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://lamf5.s3-sa-east-1.amazonaws.com/logo/logo.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="https://lamf5.s3-sa-east-1.amazonaws.com/logo/logo.png"
        color="#FFFFFF"
      />
      <link rel="shortcut icon" href="https://lamf5.s3-sa-east-1.amazonaws.com/logo/logo.png" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#FFFFFF" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content="Blog da Liga Acadêmica de Mercado Financeiro da UFV"
      />
      <meta property="og:image" content="https://lamf5.s3-sa-east-1.amazonaws.com/logo/logo.png" />
      <meta property="og:site_name" content="Blog da LAMF5" />
      <meta property="og:title" content="Blog da LAMF5" />
      <meta property="og:description" content="Fundada em 2019 por alunos da Universidade Federal de Viçosa (UFV), a LAMF5 (Liga Acadêmica de Mercado Financeiro), tem como principal objetivo: Desenvolver estudos e pesquisas acadêmicas de alta aplicabilidade, e a partir disso, produzir conteúdo para toda sociedade." />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Blog da LAMF5" />
      <meta name="twitter:description" content="Fundada em 2019 por alunos da Universidade Federal de Viçosa (UFV), a LAMF5 (Liga Acadêmica de Mercado Financeiro), tem como principal objetivo: Desenvolver estudos e pesquisas acadêmicas de alta aplicabilidade, e a partir disso, produzir conteúdo para toda sociedade." />
      <meta name="twitter:image" content="https://lamf5.s3-sa-east-1.amazonaws.com/logo/logo.png" />
    </Head>
  )
}

export default Meta
