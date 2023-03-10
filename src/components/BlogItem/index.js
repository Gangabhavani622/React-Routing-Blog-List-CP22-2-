// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem

  return (
    <li className="blog-item">
      <div className="post-name-date-container">
        <h1 className="post-title">{title}</h1>
        <p className="post-date">{publishedDate}</p>
      </div>

      <p className="post-description">{description}</p>
    </li>
  )
}
export default BlogItem
