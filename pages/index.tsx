import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>LAMF5 | Blog</title>
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
          
          <meta name="title" content="LAMF5 | Blog" />
          <meta name="description" content="Blog da Liga Acadêmica de Mercado Financeiro da UFV" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://lamf5.vercel.app/" />
          <meta property="og:title" content="LAMF5 | Blog" />
          <meta property="og:description" content="Blog da Liga Acadêmica de Mercado Financeiro da UFV" />
          <meta property="og:image" content="https://lamf5.s3-sa-east-1.amazonaws.com/logo/logo.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://lamf5.vercel.app/" />
          <meta property="twitter:title" content="LAMF5 | Blog" />
          <meta property="twitter:description" content="Blog da Liga Acadêmica de Mercado Financeiro da UFV" />
          <meta property="twitter:image" content="https://lamf5.s3-sa-east-1.amazonaws.com/logo/logo.png"></meta>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              thumbnailUrl={heroPost.thumbnailUrl}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'thumbnailUrl',
  ])

  return {
    props: { allPosts },
  }
}
