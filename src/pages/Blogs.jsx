import BlogCard from "../modals/BlogCard"

function Blogs() {
  return (
    <div className='pt-5'>
      <h5 className='text-center fs-1'>
            MY {" "}
            <span style={{color:'#ab3483'}}>
              <strong>
                 Blogs
              </strong>
            </span>
      </h5>
      <p className='fs-5 text-center px-2'>
            Below are few blogs I've worked on recently
      </p>

      <div className="d-flex flex-row justify-content-center align-items-center flex-wrap gap-4 py-5">

        <BlogCard 
        title={'React.js for Beginners: A Complete Guide'}
        desc={'React.js is a popular JavaScript library used for building user interfaces, especially for single-page applications (SPAs).'}
        blogUrl={'https://sanjayblogstechandprogramming.blogspot.com/2025/02/reactjs-for-beginners-complete-guide-to.html'}
        technology={'React'}
        duration={4}
        />

        <BlogCard 
        title={'Getting Started with Node.js: A Beginners Guide'}
        desc={'Node.js is a JavaScript runtime environment used to run code outside the browser,ideal for building scalable backend services.'}
        blogUrl={'https://sanjayblogstechandprogramming.blogspot.com/2025/02/getting-started-with-nodejs-beginners.html'}
        technology={'Node'}
        duration={5}
        />

        <BlogCard 
        title={'Getting Started with Express.js'}
        desc={'Express.js is a minimal and flexible framework for Node.js used to build web apps and APIs with a robust set of features.'}
        blogUrl={'https://sanjayblogstechandprogramming.blogspot.com/2025/02/getting-started-with-expressjs.html'}
        technology={'Express'}
        duration={3}
        />

        <BlogCard 
        title={'MongoDB : A Beginner’s Guide to NoSQL Databases'}
        desc={'MongoDB is a popular NoSQL database used for storing data in a flexible,JSON-like format,commonly used in modern web applications.'}
        blogUrl={'https://sanjayblogstechandprogramming.blogspot.com/2025/02/mongodb-beginners-guide-to-nosql.html'}
        technology={'MongoDB'}
        duration={5}
        />

        <BlogCard 
        title={'Getting Started with the MERN Stack'}
        desc={'The MERN stack is a popular JavaScript-based technology stack used for building full-stack web applications.'}
        blogUrl={'https://sanjayblogstechandprogramming.blogspot.com/2025/02/getting-started-with-mern-stack.html'}
        technology={'MERN'}
        duration={8}
        />

      </div>
    </div>
  )
}

export default Blogs