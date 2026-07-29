import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Clock, Calendar, Share2, TrendingUp, Link as LinkIcon, Send } from 'lucide-react';

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

  // Actual Data Calculations
  const wordCount = post.content.split(/\s+/g).length;
  const readTime = Math.ceil(wordCount / 200); // Average 200 words per minute

  // Unknown/Dynamic Data (Random or related posts)
  const allPosts = getAllPosts();
  const otherPosts = allPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-background min-h-screen py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Navigation */}
        <div className="mb-6 sm:mb-8">
          <Link href="/blog" className="inline-flex items-center text-link-blue hover:text-primary transition-colors text-sm font-semibold group bg-white px-5 py-2.5 rounded-full shadow-sm border border-border">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 lg:gap-12 items-start">
          
          {/* Main Article Content */}
          <article className="w-full">
            <header className="mb-6 sm:mb-10">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center text-sm text-muted font-medium">
                  <Calendar className="w-4 h-4 mr-1.5" />
                  {post.date}
                </div>
                <div className="flex items-center text-sm text-muted font-medium">
                  <Clock className="w-4 h-4 mr-1.5" />
                  {readTime} min read
                </div>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary font-sora mb-4 sm:mb-6 leading-[1.15]">
                {post.title}
              </h1>
              <p className="text-base sm:text-xl text-muted leading-relaxed font-light border-l-4 border-link-blue pl-3 sm:pl-4 mb-6 sm:mb-8">
                {post.excerpt}
              </p>
            </header>

            {post.image && (
              <div className="w-full aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-12 shadow-md border border-border">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
            )}

            <div className="prose prose-sm sm:prose-lg prose-slate max-w-none prose-headings:font-sora prose-headings:text-primary prose-a:text-link-blue hover:prose-a:text-accent prose-img:rounded-2xl bg-white p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-sm border border-border">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Bottom CTA within article */}
            <div className="mt-8 sm:mt-12 bg-gradient-to-br from-primary to-link-blue p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-lg text-white text-center">
              <h3 className="text-xl sm:text-3xl font-bold font-sora mb-3 sm:mb-4">Ready to dominate your local market?</h3>
              <p className="text-white/80 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-lg">We handle your website, Google Maps, and Meta Ads so you can focus on running your business.</p>
              <Link href="/#contact" className="inline-block bg-accent hover:bg-accent-hover text-primary font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all hover:scale-105 shadow-xl text-base sm:text-lg">
                Get a Free Quote
              </Link>
            </div>
          </article>

          {/* Sidebar (Context from corners) */}
          <aside className="space-y-6 sm:space-y-8 lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pb-4 lg:pr-2">
            
            {/* Author Profile */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-link-blue to-primary flex items-center justify-center text-white font-bold text-xl shadow-md">
                  BV
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">{post.author}</h3>
                  <p className="text-sm text-link-blue font-medium">Digital Growth Experts</p>
                </div>
              </div>
              <p className="text-sm text-muted mb-4">
                We help local businesses scale by building high-converting websites and running targeted Meta Ads.
              </p>
              <Link href="/#services" className="text-sm font-bold text-primary hover:text-link-blue flex items-center transition-colors">
                View our services <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
              </Link>
            </div>

            {/* YouTube Subscribe Box */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm border border-border border-l-4 border-l-[#FF0000]">
              <h3 className="font-bold text-primary font-sora mb-2 text-lg">Watch & Learn</h3>
              <p className="text-sm text-muted mb-4">Subscribe to our YouTube channel for free tutorials and marketing strategies.</p>
              <a href="https://www.youtube.com/@buildversesolutions.i" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-[#FF0000] hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-colors shadow-sm">
                Subscribe on YouTube
              </a>
            </div>

            {/* Share Article */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm border border-border">
              <h3 className="font-bold text-primary font-sora flex items-center gap-2 mb-4">
                <Share2 className="w-5 h-5 text-accent" /> Share this article
              </h3>
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-black hover:text-white transition-colors text-muted border border-border font-bold font-sora text-sm">
                  𝕏
                </button>
                <button className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors text-muted border border-border font-bold font-sora text-sm">
                  in
                </button>
                <button className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors text-muted border border-border font-bold font-sora text-sm">
                  f
                </button>
              </div>
            </div>

            {/* Read Next / Interesting Data */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm border border-border">
              <h3 className="font-bold text-primary font-sora flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-link-blue" /> Read Next
              </h3>
              <div className="space-y-6">
                {otherPosts.map((op) => (
                  <Link href={`/blog/${op.slug}`} key={op.slug} className="group block">
                    <h4 className="font-bold text-primary text-sm leading-snug group-hover:text-link-blue transition-colors mb-2">
                      {op.title}
                    </h4>
                    <p className="text-xs text-muted flex items-center gap-3">
                      <span>{op.date}</span>
                      <span className="w-1 h-1 rounded-full bg-border"></span>
                      <span className="text-accent font-medium">{op.category}</span>
                    </p>
                  </Link>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <Link href="/blog" className="text-sm font-bold text-primary hover:text-link-blue transition-colors w-full flex justify-center items-center">
                  View all articles
                </Link>
              </div>
            </div>

          </aside>
          
        </div>
      </div>
    </div>
  );
}
