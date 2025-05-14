
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { format } from 'date-fns';
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const { id, title, excerpt, coverImage, publishedAt, author, category } = post;

  return (
    <article
      className={cn(
        "bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md animate-fadeIn",
        featured ? "border-0" : "border border-gray-100"
      )}
    >
      <Link to={`/post/${id}`} className="block">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-center mb-2">
          <span className="text-xs font-medium px-2 py-1 rounded bg-blog-light text-blog-accent">
            {category}
          </span>
          <span className="text-blog-muted text-sm ml-2">
            {format(new Date(publishedAt), 'MMM d, yyyy')}
          </span>
        </div>

        <Link to={`/post/${id}`} className="block group">
          <h3 className={cn(
            "font-bold mb-2 group-hover:text-blog-accent transition-colors line-clamp-2",
            featured ? "text-2xl" : "text-xl"
          )}>
            {title}
          </h3>
        </Link>

        <p className="text-blog-muted mb-4 line-clamp-3">{excerpt}</p>

        <div className="flex items-center">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-8 h-8 rounded-full object-cover mr-2"
          />
          <span className="text-sm font-medium text-blog-primary">{author.name}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
