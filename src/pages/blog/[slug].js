import { urlFor, client } from "@/client";
import Navbar from "@/components/Navbar";

const BlogPost = ({ blog }) => {
  return (
    <>
      <Navbar searchEnabled={false} />
      <div className="container mx-auto px-4 mt-8">
        {/* Blog Image */}
        <img
          src={urlFor(blog.image)}
          alt={blog.title}
          className="w-full h-72 object-cover rounded-md shadow-lg mb-6"
        />

        {/* Blog Title */}
        <h1 className="text-3xl font-semibold text-gray-900">{blog.title}</h1>

        {/* Blog Content */}
        <div className="prose max-w-full mt-6">{blog.content}</div>

        {/* Author Section */}
        <div className="flex items-center mt-8">
          <img
            src={urlFor(blog.author?.image)}
            alt={blog.author?.name}
            className="w-10 h-10 object-cover rounded-full mr-2"
          />
          <div>
            <p className="text-gray-900 font-medium">{blog.author?.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const slug = params.slug;
  const query = `*[_type == "Blog" && slug.current == $slug][0]{
    _id,
    title,
    description,
    content,
    image,
    "author": author-> {
      _id,
      name,
      image
    }
  }`;
  const blog = await client.fetch(query, { slug });

  return {
    props: {
      blog,
    },
  };
}

export default BlogPost;
