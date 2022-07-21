import { readdirSync } from 'fs';
import { postDirectory } from './postDirectory';

export const getAllPostIds = () => {
  const fileNames = readdirSync(postDirectory);

  return fileNames.map(fileName => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
};

export type AllPostIds = ReturnType<typeof getAllPostIds>;
