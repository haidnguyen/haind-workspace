import { readdirSync } from 'fs';
import { postDirectory } from './postDirectory';

export const getAllPostIds = (locales: string[]) => {
  const fileNames = readdirSync(postDirectory);

  return locales.flatMap(locale =>
    fileNames.map(fileName => ({ params: { id: fileName.replace(/\.md$/, '') }, locale }))
  );
};

export type AllPostIds = ReturnType<typeof getAllPostIds>;
