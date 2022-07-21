import { readFileSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { postDirectory } from './posts-directory';

export interface PostDetail {
  id: string;
  title: string;
  date: string;
}

export const getPostData = (id: string) => {
  const fullPath = path.join(postDirectory, `${id}.md`);
  const fileContent = readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContent);

  return {
    id,
    ...matterResult.data,
  };
};
