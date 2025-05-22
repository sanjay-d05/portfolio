import Card from 'react-bootstrap/Card';
import { FaArrowRight } from "react-icons/fa";

function BlogCard({title , desc , blogUrl , technology , duration}) {
  return (
    <Card
    style={{
        width: '18rem',
      }} 
    >
      <Card.Body>
        <span style={{backgroundColor:'#ab3483' , color:'#ffffff'}} className='rounded p-1'>
          {technology}
        </span>
        <Card.Title style={{color:'#ab3483'}} className='mt-2'>
            {title}
        </Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <div className='d-flex justify-content-between align-items-center'>
          <Card.Link href={blogUrl} target='_blank' className='text-decoration-none fw-bold view-blog' style={{color:'#ab3483'}}>
           View More <FaArrowRight />
          </Card.Link> 
          <span>
            {duration} min read
          </span>
        </div>
      </Card.Body>
    </Card>

  )
}

export default BlogCard