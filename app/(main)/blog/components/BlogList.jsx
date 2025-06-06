import { HoverEffect } from "@/components/ui/AceternityCards";
import { getPayload } from "../../../../lib/payload";

export async function BlogList() {
  const payload = await getPayload();
  const post = await payload.find({
    collection: "posts",
    limit: "",
    sort: "-updatedAt",
    where: {
      includedInBlog: {
        equals: true,
      },
    },
  });

  return (
    <>
      <div className="text-3xl font-semibold mx-auto justify-center flex">
        <h1>Latest Blog</h1>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={post.docs} href={`/posts/${post.id}`} />
      </div>
    </>
  );
}
