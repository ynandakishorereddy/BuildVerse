import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: `${post.title} | BuildVerse Solutions`,
      description: post.excerpt,
    };
  } catch (e) {
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  
  try {
    post = getPostBySlug(slug);
  } catch (e) {
    notFound();
  }

  return (
    <div className="bg-background min-h-screen py-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center text-link-blue hover:text-primary transition-colors mb-8 text-sm font-semibold group bg-white/50 px-4 py-2 rounded-full shadow-sm border border-black/5">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
        
        {post.image && (
          <div className="w-full aspect-video md:aspect-[2/1] rounded-3xl overflow-hidden mb-12 shadow-lg">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        <header className="mb-12 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-muted">{post.date}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-primary font-sora mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto italic">
            {post.excerpt}
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-link-blue flex items-center justify-center text-white font-bold shadow-md">
              BV
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-primary">{post.author}</p>
              <p className="text-xs text-muted">BuildVerse Solutions</p>
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-slate mx-auto prose-headings:font-sora prose-headings:text-primary prose-a:text-link-blue hover:prose-a:text-accent prose-img:rounded-2xl bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-black/5">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <div className="mt-16 pt-8 border-t border-black/5">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 text-center">
            <h3 className="text-2xl font-bold text-primary font-sora mb-4">Ready to grow your local business?</h3>
            <p className="text-muted mb-6">We handle your website, Google Maps, and Meta Ads so you can focus on running your business.</p>
            <Link href="/#contact" className="inline-block bg-accent hover:bg-accent-hover text-primary font-bold py-3 px-8 rounded-full transition-all hover:-translate-y-1 hover:shadow-lg">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
