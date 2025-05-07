import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      date: 'March 9, 2024',
      title: 'The Art of Server Scaling: Strategies for Seamless Growth',
      description: 'Explore effective strategies and best practices for scaling servers to meet growing demands without compromising performance or reliability.',
      slug: 'server-scaling-strategies',
      content: {
        intro: 'Scaling a server is a critical aspect of managing infrastructure, particularly when facing increased traffic or resource demands. It involves adjusting server capacity to accommodate varying workloads while maintaining optimal performance and reliability.',
        sections: [
          {
            title: 'Vertical Scaling (Scaling Up)',
            content: 'Vertical scaling entails increasing the capacity of a single server by adding more resources like CPU, RAM, or storage. While straightforward, it’s limited by hardware constraints and can create single points of failure.',
          },
          {
            title: 'Horizontal Scaling (Scaling Out)',
            content: 'Horizontal scaling involves adding more servers to distribute the workload across multiple machines. This approach enhances fault tolerance and scalability but necessitates effective load balancing and synchronization mechanisms.',
          },
          {
            title: 'Factors Driving Scaling',
            subsections: [
              {
                title: 'Increased Traffic',
                content: 'Rapidly growing user demand can overwhelm a server, leading to performance degradation or downtime. Scaling enables the distribution of traffic across multiple servers to sustain optimal performance.',
              },
              {
                title: 'Resource-Intensive Tasks',
                content: 'Certain operations, such as data processing or complex computations, may require additional resources. Scaling ensures adequate computing power to handle such tasks efficiently.',
              },
              {
                title: 'High Availability Requirements',
                content: 'To minimize downtime and ensure continuous service availability, scaling servers across multiple geographic locations or data centers enhances fault tolerance and redundancy.',
              },
            ],
          },
          {
            title: 'Strategies for Effective Scaling',
            subsections: [
              {
                title: 'Vertical Scaling',
                list: [
                  'Upgrade Hardware: Replace existing hardware components with higher-capacity ones, such as faster CPUs or larger RAM modules.',
                ],
              },
              {
                title: 'Horizontal Scaling',
                list: [
                  'Optimize Software: Fine-tune server configurations, optimize database queries, and eliminate bottlenecks to improve efficiency.',
                ],
              },
            ],
          },
        ],
      },
    },
    {
      date: 'March 8, 2024',
      title: 'Introduction to Cloud Computing',
      description: 'Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. The term is generally used to describe data centers available to many users over the Internet.',
      slug: 'introduction-to-cloud-computing',
      content: {
        intro: 'Cloud computing is a transformative technology that enables scalable, on-demand access to computing resources, revolutionizing how businesses operate.',
        sections: [
          {
            title: 'What is Cloud Computing?',
            content: 'Cloud computing provides virtualized resources over the internet, allowing users to access storage, computing power, and applications without managing physical hardware.',
          },
        ],
      },
    },
  ];

  return (
    <section className="bg-[#121212]  text-[#d4d4d4] py-12 sm:py-24 px-4 sm:px-6 font-poppins min-h-fit sm:max-w-[1080px] sm:mx-40 ">
      <div className="max-w-5xl   ">
        <h1 className="text-[#f5f5f5] text-4xl sm:text-5xl font-bold leading-tight mb-4">
          I write about things I’m learning and things I’m building.
        </h1>
        <p className="text-[#d4d4d4] text-sm sm:text-base leading-relaxed mb-12">
          I hope you find something useful here. If you have any questions or feedback, feel free to reach out to me on{' '}
          <a href="" className="text-[#8b5cf6] hover:underline">
            Twitter X
          </a>{' '}
          or{' '}
          <a href="https://github.com/ali0025" className="text-[#8b5cf6] hover:underline">
            GitHub
          </a>.
        </p>
        <div className="space-y-8">
          {posts.map((post, index) => (
            <div key={index} className="border-l-2 border-[#333333] pl-4">
              <p className="text-[#888888] text-sm">{post.date}</p>
              <h2 className="text-[#f5f5f5] text-xl sm:text-2xl font-semibold mt-2">{post.title}</h2>
              <p className="text-[#d4d4d4] text-sm sm:text-base leading-relaxed mt-2">{post.description}</p>
              <Link
                to={`/article/${post.slug}`}
                state={{ post }}
                className="text-[#8b5cf6] text-sm sm:text-base mt-2 inline-block hover:underline"
              >
                Read article →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;