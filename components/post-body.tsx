import Head from 'next/head';
import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
  excerpt: string
  title: string
  thumbnailUrl: string
}

const PostBody = ({ content, excerpt, title, thumbnailUrl }: Props) => {
  return (
    <>
      <Head>
      <meta name="description" content={excerpt} />

      <meta property="og:site_name" content="Blog da LAMF5" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={excerpt} />

      <meta property="og:image" content={thumbnailUrl} />
      <meta property="og:image:type" content="image/png" />

      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={excerpt} />
      <meta name="twitter:image" content={thumbnailUrl} />  
      </Head>
      <div className="max-w-2xl mx-auto">
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  )
}

export default PostBody
