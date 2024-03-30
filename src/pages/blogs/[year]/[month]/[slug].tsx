import Layout from "@/components/Layout";
import { getAllMarkdowns } from "@/lib/fetchMarkdowns";
import { GetStaticProps } from "next";
import Link from "next/link";

interface Props {
  post: Record<string, any>;
  latestPost: Record<string, any>[];
}

export async function getStaticPaths() {
  const posts = getAllMarkdowns("src/data/blogs", ["slug", "date"]);
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
        year: String(post.year),
        month: String(post.month),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getAllMarkdowns("src/data/blogs", [
    "title",
    "date",
    "slug",
    "month",
    "year",
    "content",
    "preview",
    "description",
  ]);

  if (params) {
    const currPostCondition = (post: Record<string, any>) =>
      post.slug == params.slug &&
      post.year == params.year &&
      post.month == params.month;
    const post = posts.find(currPostCondition);
    const latestPost = posts
      .filter((post) => !currPostCondition(post))
      .slice(0, 5);
    return {
      props: { post, latestPost },
    };
  }

  return {
    notFound: true,
  };
};

export default function BlogPage({ post, latestPost }: Props) {
  return (
    <Layout>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
      <ul>
        {latestPost?.map((item) => (
          <li key={item.slug + item.date}>
            <Link href={`/blogs/${item.year}/${item.month}/${item.slug}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
