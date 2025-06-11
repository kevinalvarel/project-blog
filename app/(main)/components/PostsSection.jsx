import { HoverEffect } from "@/components/ui/AceternityCards";
import { getPayload } from "../../../lib/payload";

export const dynamic = "force-dynamic";
export async function PostsSection() {
  const payload = await getPayload();
  const posts = await payload.find({
    collection: "posts",
    limit: "6",
    sort: "-updatedAt",
    where: {
      includedInBlog: {
        equals: true,
      },
    },
  });

  return (
    <>
      <div className="text-3xl font-semibold mx-auto pt-10 justify-center flex">
        <h1>Latest Blog</h1>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={posts.docs} />
      </div>
    </>
  );
}
