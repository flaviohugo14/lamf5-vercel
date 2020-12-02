import Head from 'next/head'
import { HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/LogoLamf5.svg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/LogoLamf5.svg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/LogoLamf5.svg"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/LogoLamf5.svg"
        color="#FFFFFF"
      />
      <link rel="shortcut icon" href="/favicon/LogoLamf5.svg" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#FFFFFF" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content="Blog da Liga Acadêmica de Mercado Financeiro da UFV"
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}

export default Meta
