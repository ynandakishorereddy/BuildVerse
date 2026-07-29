import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog | BuildVerse Solutions',
  description: 'Insights and guides on local SEO, web development, and digital marketing for local businesses.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="bg-background min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-primary font-sora mb-6">Our Blog</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Insights, guides, and strategies to help local businesses thrive online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
              <div className="bg-card border border-black/5 rounded-2xl overflow-hidden h-full shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                {post.image && (
                  <div className="w-full h-48 overflow-hidden bg-slate-100">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-link-blue bg-link-blue/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-muted">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-primary mb-3 font-sora group-hover:text-link-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 pt-6 border-t border-black/5 flex items-center justify-between text-sm">
                    <span className="font-medium text-primary">{post.author}</span>
                    <span className="text-accent font-semibold group-hover:underline">Read more &rarr;</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
