import Layout from "@/components/Layout";
import { getAllMarkdowns } from "@/lib/fetchMarkdowns";
import { GetStaticProps } from "next";
import Link from "next/link";

interface Props {
  project: Record<string, any>;
}

export async function getStaticPaths() {
  const projects = getAllMarkdowns("src/data/projects", ["slug"]);
  const paths = projects.map((project) => {
    return {
      params: {
        slug: project.slug
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
