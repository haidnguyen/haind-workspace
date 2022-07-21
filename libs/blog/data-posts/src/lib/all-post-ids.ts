import { readdirSync } from 'fs';
import { postDirectory } from './posts-directory';

export const getAllPostIds = () => {
  const fileNames = readdirSync(postDirectory);

  return fileNames.map(fileName => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
};
