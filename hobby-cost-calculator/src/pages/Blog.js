import React from 'react';

const blogPosts = [
  {
    title: 'Is Guitar a Budget-Friendly Hobby?',
    excerpt: 'Explore how much it really costs to start learning the guitar...',
    link: '#',
  },
  {
    title: 'Camping Essentials: What to Buy First?',
    excerpt: 'If you are new to camping, here is your go-to starter gear list.',
    link: '#',
  },
  {
    title: 'Photography Gear: Beginner vs Pro',
    excerpt: 'Let’s break down what gear you need depending on your experience level.',
    link: '#',
  },
];

const Blog = () => {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>Blog</h1>
      <div style={styles.grid}>
        {blogPosts.map((post, index) => (
          <div key={index} style={styles.card}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <a href={post.link} style={styles.link}>Read more →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '60px 20px',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '40px',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
  },
  link: {
    display: 'inline-block',
    marginTop: '10px',
    color: '#4F46E5',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Blog;
