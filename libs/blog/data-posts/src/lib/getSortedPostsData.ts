import { readdir } from 'fs/promises';
import matter from 'gray-matter';
import { postDirectory } from './postDirectory';
import { readFileContent } from './readFileContent';

export interface PostData {
  id: string;
  title: string;
  date: string;
  tags: string[];
}

export const getSortedPostsData = async (locale: string) => {
  const fileNames = await readdir(postDirectory);

  const allPostsData = await Promise.all(
    fileNames.map(async fileName => {
      const id = fileName.replace(/\.md$/, '');
      const fileContent = await readFileContent(postDirectory, id, locale);
      const matterResult = matter(fileContent);

      return {
        id,
        ...matterResult.data,
      } as PostData;
    })
  );

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
