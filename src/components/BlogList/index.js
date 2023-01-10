// Write your JS code here

import {Component} from 'react'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props
    console.log(blogsList)

    return (
      <ul className="blog-list">
        {blogsList.map(eachItem => (
          <BlogItem blogItem={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }
}
export default BlogList
