import Layout from "@/components/Layout";
import { getAllMarkdowns } from "@/lib/fetchMarkdowns";
import Link from "next/link";

interface Props {
  postList: Record<string, any>[];
}

export function getStaticProps() {
  const postList = getAllMarkdowns("src/data/blogs", [
    "title",
    "date",
    "year",
    "month",
    "slug",
    "preview",
    "toolIcon",
  ]);

  return {
    props: { postList },
  };
}

export default function BlogPage({ postList }: Props) {
  return (
    <Layout>
      <ul>
        {postList?.map((post) => (
          <li key={post.slug + post.date}>
            <Link href={`/blogs/${post.year}/${post.month}/${post.slug}`}>
                {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
