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
