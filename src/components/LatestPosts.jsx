import React, { useState } from "react";
import blogimg from "../assets/blog1.jpg";
import blogimg2 from "../assets/blog2.jpg";
import blogimg3 from "../assets/blog3.jpg";
import SectionHeading from "./SectionHeading";

const posts = [
  {
    title: "Designing Minimal Interfaces",
    date: "09 February, 2022",
    author: "Greg",
    image: blogimg,
    tag: "Design",
    link: "https://medium.com/@aliansari8179/designing-minimal-interfaces-for-better-web-development-3fb03d1e354a",
  },
  {
    title: "The Future of Development",
    date: "15 March, 2022",
    author: "Sophie",
    image: blogimg2,
    tag: "JavaScript",
    link: "https://medium.com/@aliansari8179/introduction-to-javascript-execution-context-c5d4270fad86",
  },
  {
    title: "Building with HTML",
    date: "22 April, 2022",
    author: "Alex",
    image: blogimg3,
    tag: "HTML",
    link: "https://medium.com/@aliansari8179/building-modern-websites-with-html-a2b51ec22dda",
  },
  
];

const BlogCard = ({ post }) => (
  <a href={post.link} target="_blank" rel="noopener noreferrer" className="block">
    <div className="bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-lg w-full sm:w-[300px] transition transform hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover filter"
          loading="lazy"
        />
        <span className="absolute top-2 left-2 bg-[#272729] text-white text-xs font-medium px-2 py-1 rounded">
          {post.tag}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-white text-lg font-semibold">{post.title}</h3>
        <p className="text-gray-400 text-sm mt-1">
          {post.date} · {post.author}
        </p>
      </div>
    </div>
  </a>
);

const LatestPosts = () => {
  const [visiblePosts, setVisiblePosts] = useState(3);

  const handleTogglePosts = () => {
    if (visiblePosts === 3) {
      setVisiblePosts(6); // Show next 3 posts
    } else {
      setVisiblePosts(3); // Show only first 3 posts
    }
  };

  return (
    <section className="bg-[#121212] text-white py-12 px-24 sm:px-12 lg:px-8">
      <div className="max-w-[1050px] mx-auto">
        <SectionHeading highlight="latest" text="Posts" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, visiblePosts).map((post, idx) => (
            <BlogCard key={idx} post={post} />
          ))}
        </div>
        {posts.length > 3 && (
          <div className="mt-8 text-center">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-lg px-6 py-2 rounded-2xl transition"
              onClick={handleTogglePosts}
            >
              {visiblePosts === 3 ? "Show All Posts" : "View Less"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestPosts;