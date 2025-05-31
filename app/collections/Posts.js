export const Posts = {
  slug: "posts",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "includedInBlog",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "banner",
      label: "Banner Image",
      type: "upload",
      relationTo: "media",
    },
  ],
};
