import Head from 'next/head';
import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage: string;
  thumbnailUrl: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  thumbnailUrl,
  excerpt,
  author,
  slug,
}: Props) => {

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
      <div>
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={thumbnailUrl} />
        </div>
        <h3 className="text-3xl mb-3 leading-snug">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </>
  );
};

export default PostPreview;
