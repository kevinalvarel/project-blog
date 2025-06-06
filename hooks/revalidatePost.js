import { revalidate } from "../lib/revalidate";

// Revalidate the post in the background, so the user doesn't have to wait
// Notice that the hook itself is not async and we are not awaiting `revalidate`
export const revalidatePost = ({ doc, req }) => {
  revalidate({ payload, slug: `blog/${doc.id}` });

  // Revalidate the blog overview page
  revalidate({ payload, slug: "[locale]/(default)/blog" });

  return doc;
};
