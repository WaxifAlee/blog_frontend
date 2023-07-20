import { client } from "../client";
import React, { useState, useEffect } from "react";

import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";

import "../app/globals.css";

export default function index() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    const query =
      '*[_type=="Blog"]{_id, title, description, content, image, slug, "author": author->}';
    client.fetch(query).then((res) => {
      setBlogs(res);
      setFilteredBlogs(res);
      console.log(res);
    });
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === "") {
      // If search input is empty, show all blogs
      setFilteredBlogs(blogs);
    } else {
      // Filter blogs based on the search input
      const filtered = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  };

  return (
    <>
      <Navbar searchEnabled={true} onSearch={handleSearch} />

      <h1 className="text-center font-dancingScript relative top-6 text-6xl border-b-2 pb-4">
        {" "}
        Blogs{" "}
      </h1>

      <div className="flex flex-col md:flex-row flex-wrap justify-evenly items-center md:items-start self-start mt-16">
        {blogs.length > 0 ? (
          filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
          ) : (
            <p className="text-center mt-8 font-bold font-sans text-xl">
              No Result Found
            </p>
          )
        ) : (
          <p className="text-center font-bold font-sans mt-8 text-xl">
            Loading...
          </p>
        )}
      </div>
    </>
  );
}
