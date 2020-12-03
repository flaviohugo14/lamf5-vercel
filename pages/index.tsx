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
          <meta
            name="description"
            content="Blog da Liga Acadêmica de Mercado Financeiro da UFV"
          />
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
