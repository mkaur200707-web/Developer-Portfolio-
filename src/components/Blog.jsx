
import { useState, useEffect } from 'react';

import {
  BookOpen,
  CalendarDays,
  Clock3,
  Search,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

import { blogPosts } from '../data/blogPosts';

function Blog() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = [
    'All',
    ...new Set(blogPosts.map((post) => post.category))
  ];

  const filteredPosts = blogPosts
    .filter((post) => {
      const keyword = search.trim().toLowerCase();

      const matchesSearch =
        post.title.toLowerCase().includes(keyword) ||
        post.excerpt.toLowerCase().includes(keyword) ||
        post.category.toLowerCase().includes(keyword);

      const matchesCategory =
        selectedCategory === 'All' ||
        post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  function formatDate(date) {
    return new Date(`${date}T00:00:00`).toLocaleDateString(
      'en-US',
      {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }
    );
  }

  function openArticle(post) {
    setSelectedPost(post);
  }

  function closeArticle() {
    setSelectedPost(null);
  }

  useEffect(() => {
    if (selectedPost) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedPost]);

  // Full Article View
  if (selectedPost) {
    return (
      <section className="blog-section" id="blog">
        <article className="blog-article">
          <button
            type="button"
            className="blog-back-btn"
            onClick={closeArticle}
          >
            <ArrowLeft size={18} />
            Back to Articles
          </button>

          <div className="blog-article-header">
            <span className="blog-category">
              {selectedPost.category}
            </span>

            <h1>{selectedPost.title}</h1>

            <div className="blog-meta">
              <span>
                <CalendarDays size={16} />
                {formatDate(selectedPost.date)}
              </span>

              <span>
                <Clock3 size={16} />
                {selectedPost.readTime}
              </span>
            </div>
          </div>

          <p className="blog-article-intro">
            {selectedPost.excerpt}
          </p>

          <div className="blog-article-content">
            {selectedPost.content.map((section, index) => (
              <section key={index}>
                <h2>{section.heading}</h2>
                <p>{section.text}</p>
              </section>
            ))}
          </div>

          <button
            type="button"
            className="blog-back-btn blog-bottom-back"
            onClick={closeArticle}
          >
            <ArrowLeft size={18} />
            Back to Articles
          </button>
        </article>
      </section>
    );
  }

  // Blog Listing View
  return (
    <section className="blog-section" id="blog">
      <div className="section-heading">
        <p>THOUGHTS & LEARNING</p>
        <h2>
          Learning <span>Journal</span>
        </h2>
        <div className="heading-line"></div>
      </div>

      <p className="blog-intro">
        Exploring software development, programming
        concepts, and the technologies behind modern
        applications.
      </p>

      {/* Search Bar */}
      <div className="blog-search">
        <Search size={20} />

        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search articles"
        />
      </div>

      {/* Category Filters */}
      <div className="blog-filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`blog-filter-btn ${
              selectedCategory === category ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory(category)}
            aria-pressed={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Article Cards */}
      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <article className="blog-card" key={post.id}>
            <div className="blog-card-icon">
              <BookOpen size={28} strokeWidth={1.5} />
            </div>

            <span className="blog-category">
              {post.category}
            </span>

            <h3>{post.title}</h3>

            <p>{post.excerpt}</p>

            <div className="blog-meta">
              <span>
                <CalendarDays size={15} />
                {formatDate(post.date)}
              </span>

              <span>
                <Clock3 size={15} />
                {post.readTime}
              </span>
            </div>

            <button
              type="button"
              className="blog-read-btn"
              onClick={() => openArticle(post)}
            >
              Read Article
              <ArrowRight size={17} />
            </button>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="blog-empty" role="status">
          No articles found.
        </p>
      )}

      
    </section>
  );
}

export default Blog;
