import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from '@/lib/posts';

export default function Page() {
  const posts = getAllPosts();

  return (
    <section className="page-section sub-page bg-white-x">
      <div className='container'>
        <div className="page-header">
          <p className="fw-bold mb-4 text-primary">Blog</p>
          <h2 className="fw-bold">The Insightful Business</h2>
          <p>Driving Success Through Measurable Results</p>
        </div>
        <div className="row pt-3">
          {posts.map((post) => (
            <div key={post.slug} className='col-md-4 mb-4'>
              <div className="card feature-card">
                <Image
                  src={`/blog/${post.frontmatter.image}`}
                  className='img-fluid'
                  alt="blog image"
                  width={800}
                  height={200}
                  priority
                />
                <div className="card-body">
                  <h5 className="card-title">{post.frontmatter.title}</h5>
                  <p className="card-text">{post.frontmatter.description}</p>
                  <Link href={`/blog/${post.slug}`} target='_blank'>Read more</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
