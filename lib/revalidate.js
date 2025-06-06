// src/payload/utilities/revalidate.js

/**
 * Revalidates a page by calling Next.js revalidate API
 * @param {Object} args - Arguments object
 * @param {string} args.slug - The slug of the page to revalidate
 * @param {Payload} args.payload - Payload instance
 * @returns {Promise<void>}
 */
export const revalidate = async (args) => {
  const { payload, slug } = args;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_FRONTEND_URI}/api/revalidate?secret=${process.env.NEXT_PRIVATE_REVALIDATION_KEY}&slug=${slug}`,
      { cache: "no-cache" }
    );

    if (res.ok) {
      payload.logger.info(`Revalidated page '${slug}'`);
    } else {
      payload.logger.error(
        `Error revalidating page '${slug}': ${JSON.stringify(res)}`
      );
    }
  } catch (err) {
    payload.logger.error(
      `Error hitting revalidate route for page '${slug}': ${err}`
    );
  }
};
