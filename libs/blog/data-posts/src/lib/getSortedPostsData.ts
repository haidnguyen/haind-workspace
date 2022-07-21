import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { postDirectory } from './postDirectory';

export interface PostData {
  id: string;
  title: string;
  date: string;
}

export const getSortedPostsData = () => {
  const fileNames = readdirSync(postDirectory);
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = readFileSync(fullPath, 'utf-8');
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    } as PostData;
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else if (a.date > b.date) {
      return -1;
    } else {
      return 0;
    }
  });
};
