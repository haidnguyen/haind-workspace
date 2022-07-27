import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { postDirectory } from './postDirectory';

export interface PostData {
  id: string;
  title: string;
  date: string;
}

export const getSortedPostsData = (locale: string) => {
  const fileNames = readdirSync(postDirectory);

  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const allFileNames = readdirSync(path.join(postDirectory, fileName));
    const contentLocale = allFileNames.map(fileName => fileName.replace(/\.md$/, '')).includes(locale)
      ? locale
      : allFileNames[0].replace(/\.md$/, '');
    const fullPath = path.join(postDirectory, fileName, `${contentLocale}.md`);
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
