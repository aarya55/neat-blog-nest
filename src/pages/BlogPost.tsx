
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostHeader from "@/components/BlogPostHeader";
import AuthorBio from "@/components/AuthorBio";
import { getBlogPostById, getLatestBlogPosts } from "@/data/blogPosts";
import BlogCard from "@/components/BlogCard";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = id ? getBlogPostById(id) : undefined;
  const relatedPosts = getLatestBlogPosts(3).filter(p => p.id !== id);
  
  useEffect(() => {
    if (!post) {
      navigate("/not-found");
    }
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [post, navigate]);

  if (!post) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <article className="py-8 md:py-12">
          <div className="blog-container">
            <BlogPostHeader post={post} />
            
            <div 
              className="blog-content prose prose-lg md:prose-xl max-w-none"
              dangerouslySetInnerHTML={{ __html: marked(post.content) }}
            />
            
            <div className="flex flex-wrap gap-2 mt-8">
              {post.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-xs font-medium px-3 py-1 rounded-full bg-blog-light text-blog-accent"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <AuthorBio author={post.author} />
          </div>
        </article>
        
        {/* Related posts section */}
        <section className="py-12 bg-blog-light">
          <div className="blog-container">
            <h2 className="text-2xl font-bold text-blog-primary mb-8">You might also like</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Simple markdown parser function
const marked = (markdown: string) => {
  // Convert headers
  let html = markdown
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gm, '<h4>$1</h4>')
    .replace(/^##### (.*$)/gm, '<h5>$1</h5>')
    .replace(/^###### (.*$)/gm, '<h6>$1</h6>');

  // Convert paragraphs
  html = html.replace(/^\s*(\n)?(.+)/gm, function(m) {
    return /^<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>' + m + '</p>';
  });
  
  // Convert bold and italics
  html = html
    .replace(/\*\*(.*)\*\*/gm, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gm, '<em>$1</em>')
    .replace(/\n/g, '<br />');
  
  // Convert lists
  html = html
    .replace(/^\s*\n\*\s/gm, '<ul>\n* ')
    .replace(/^(\*\s.+)\s*\n([^\*])/gm, '$1\n</ul>\n$2')
    .replace(/^\*\s(.+)/gm, '<li>$1</li>');
    
  return html.trim();
};

export default BlogPost;
