import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'ht6pvdlg',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
