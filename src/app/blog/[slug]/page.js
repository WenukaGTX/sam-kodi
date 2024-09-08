import { getPostBySlug, generateStaticParams } from '@/lib/posts';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import '../blog.scss';

export default async function Page({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, contentHtml } = post;

  return (
    <article>
      <section className="page-section sub-page bg-white-x">
        <div className='container'>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="page-header text-start">
                <p className="fw-bold mb-4 text-primary">Blog No {frontmatter.id}</p>
                <h2 className="fw-bold">{frontmatter.title}</h2>
                <p><small>{frontmatter.date}</small></p>
              </div>
              <Image
                src={`/blog/${frontmatter.image}`}
                className='img-fluid'
                alt="blog image"
                width={800}
                height={450}
                priority
                className="d-block mx-auto mb-5 w-100 h-auto"
              />

              <div className='blog-post' dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}