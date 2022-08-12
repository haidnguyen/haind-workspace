import Head from 'next/head';

export interface BlogUiSeoProps {
  title: string;
  titleTag?: string;
  description: string;
  image?: string;
}

export function BlogUiSeo({ title, description, image, titleTag }: BlogUiSeoProps) {
  return (
    <Head>
      <title>{titleTag ? `${title} | ${titleTag}` : title}</title>
      <meta property='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      {image && (
        <>
          <meta property='og:image' content={image} />
          <meta property='og:image:secure_url' content={image} />
          <meta property='og:image:type' content='image/png' />
          <meta property='og:image:width' content='1280' />
          <meta property='og:image:height' content='720' />
        </>
      )}
    </Head>
  );
}

export default BlogUiSeo;
