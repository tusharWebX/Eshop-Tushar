import React from 'react'
import Heading from '../Shard/Heading'


// import images 
import Img1 from "../../assets/blogs/blog-1.jpg"
import Img2 from "../../assets/blogs/blog-2.jpg"
import Img3 from "../../assets/blogs/blog-3.jpg"


const BlogData = [
  {
    title: "How to Choose the Perfect Smartwatch",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto error amet nostrum, modi harum eaque expedita voluptatem saepe rerum minima sequi labore dignissimos tenetur reprehenderit! Error quaerat sint mollitia.",
    published: "Jan 20, 2024 by Dilshad",
    image: Img1,
    aosDelay: "0"
  },
  {
    title: "How to Choose the Perfect Gadget",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto error amet nostrum, modi harum eaque expedita voluptatem saepe rerum minima sequi labore dignissimos tenetur reprehenderit! Error quaerat sint mollitia.",
    published: "Feb 15, 2024 by John Doe",
    image: Img2, 
    aosDelay: "200"
  },
  {
    title: "How to Choose the Perfect VR Headset",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto error amet nostrum, modi harum eaque expedita voluptatem saepe rerum minima sequi labore dignissimos tenetur reprehenderit! Error quaerat sint mollitia.",
    published: "Mar 5, 2024 by Jane Smith",
    image: Img3, 
    aosDelay: "400"
  },
]
const Blog = () => {
  return (
    <div className='my-12'>
      <div className="container">
         {/* Header Section */}
         <Heading title="Recent News" subtitle="Explore Our Blogs" />

         {/* Blog Section */}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog Card  */}
          {
            BlogData.map((data) => (
              <div 
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
              key={data.id} className="bg-white dark:bg-gray-900">
                {/* Image Section  */}
                <div className="overflow-hidden rounded-2xl mb-2">
                    <img src={data.image} alt="" className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' />
                </div>
                {/* Content Section  */}
                <div className="space-y-2">
                  <p className='text-xs text-gray-500'>{data.published}</p>
                  <p className='font-bold line-clamp-1'>{data.title}</p>
                  <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                </div>
              </div>
            ))
          }
         </div>
      </div>
    </div>
  )
}

export default Blog
