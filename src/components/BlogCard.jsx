import { urlFor } from "@/client";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <div className="flex flex-col bg-white w-96 md:w-[30%] h-auto border-2 border-slate-950 rounded-lg p-3 mt-12 md:mt-0">
      <div>
        <img
          src={urlFor(blog.image)}
          alt=""
          className="h-72 rounded-lg shadow-lg mb-4"
        />
      </div>

      <div className="flex flex-col justify-center items-center p-2 ">
        <h2 className="font-poppins font-bold text-gray-600 text-2xl">
          {" "}
          {blog.title}{" "}
        </h2>
        <br />
        <p className="font-serif font-medium text-gray-900">
          {blog.description}...
        </p>
        <br />

        <div className="flex items-center justify-start">
          <Link
            href={`/blog/${blog.slug.current}`}
            className="text-left px-4 py-2 bg-gray-950 text-white rounded-md"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
