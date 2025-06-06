import { getPayload } from "../../../../lib/payload";
import { RichText as SerializeRichText } from "@payloadcms/richtext-lexical/react";

const Page = async ({ params }) => {
  const { postId } = await params;
  const payload = await getPayload();
  const post = await payload.find({
    collection: "posts",
    where: {
      id: {
        equals: postId,
      },
    },
  });

  console.log("INI POST", post);

  if (!post) {
    return <div>BLOG TIDAK ADA</div>;
  }

  let data = post.docs[0];

  return (
    <div className="container mx-auto p-8 pb-20 mt-10 sm:p-20">
      <h1 className="flex justify-center text-2xl font-semibold text-center">
        {data.title}
      </h1>
      <SerializeRichText data={data.content} />
    </div>
  );
};

export default Page;
