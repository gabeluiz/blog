import Footer from '../components/Footer'
import Link from 'next/link';
import { getAllPosts } from '../infra/getAllPosts';

export default function Home({ allPosts }) {
  return (
    <div>
      <header className="headerContainer">
        <h1>
          Blog
        </h1>
      </header>

      <section className="postsContainer">
        {allPosts.map((post) => (
          <article key={post.slug} className="postsContainer__post">
            <Link href={`posts/${post.slug}`}>
              <a>
                {post.title}
              </a>
            </Link>
            <p>
              {post.excerpt}
            </p>
          </article>
        ))}
      </section>

{/* colocar redes sociais e os carai */}
      <Footer
        facebook=""
        twitter=""
        linkedin=""
        github=""
      />
    </div>
  )
}

export async function getStaticProps() {
  //aqui usa gra
  const allPosts = await getAllPosts([
    'title',
    'slug',
    'excerpt',
  ])
  return {
    props: { allPosts },
  }
}