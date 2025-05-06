import React from 'react';
import { useLocation } from 'react-router-dom';

const BlogPost = () => {
  const location = useLocation();
  const { post } = location.state || {};

  if (!post) {
    return (
      <section className="bg-[#121212] text-[#d4d4d4] py-12 px-4 sm:px-6 font-poppins min-h-screen">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#f5f5f5] text-xl">Post not found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#121212] text-[#d4d4d4] py-12 px-4 sm:px-6 font-poppins min-h-screen">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#888888] text-sm mb-4">{post.date}</p>
        <h1 className="text-[#f5f5f5] text-3xl sm:text-4xl font-bold mb-6">{post.title}</h1>
        <div className="space-y-8">
          {/* Introduction */}
          <p className="text-[#d4d4d4] text-sm sm:text-base leading-relaxed">{post.content.intro}</p>

          {/* Sections */}
          {post.content.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-[#f5f5f5] text-xl sm:text-2xl font-semibold mb-3">{section.title}</h2>
              {section.content && (
                <p className="text-[#d4d4d4] text-sm sm:text-base leading-relaxed">{section.content}</p>
              )}
              {section.subsections && (
                <div className="space-y-4">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex}>
                      <h3 className="text-[#f5f5f5] text-lg sm:text-xl font-medium">{subsection.title}</h3>
                      <p className="text-[#d4d4d4] text-sm sm:text-base leading-relaxed">{subsection.content}</p>
                      {subsection.list && (
                        <ol className="list-decimal list-inside text-[#d4d4d4] text-sm sm:text-base leading-relaxed space-y-2">
                          {subsection.list.map((item, listIndex) => (
                            <li key={listIndex}>
                              <span className="font-medium">{item.split(': ')[0]}:</span> {item.split(': ')[1]}
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPost;