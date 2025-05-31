import data from "@/public/dummy.json";
import { HoverEffect } from "@/components/ui/AceternityCards";
import { getPayload } from "../../../../lib/payload";

export async function BlogList() {
  const payload = await getPayload();
  const post = await payload.find({
    collection: "posts",
    limit: "6",
    sort: "-updatedAt",
    where: {
      includedInBlog: {
        equals: true,
      },
    },
  });

  console.log(post);

  return (
    <>
      <div className="text-3xl font-semibold mx-auto pt-10 justify-center flex">
        <h1>Latest Blog</h1>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={post.docs} />
      </div>
    </>
  );
}
