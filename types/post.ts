import Author from './author'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  thumbnailUrl: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
