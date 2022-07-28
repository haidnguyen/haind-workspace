import { readdir, readFile } from 'fs/promises';
import path from 'path';

export const readFileContent = async (diretory: string, name: string, locale: string) => {
  const dirPath = path.join(diretory, name);
  const fileNames = await readdir(dirPath);
  const pathLocale = fileNames.map(fileName => fileName.replace(/\.md$/, '')).includes(locale)
    ? locale
    : fileNames[0].replace(/\.md$/, '');
  const filePath = path.join(diretory, name, `${pathLocale}.md`);
  return await readFile(filePath, 'utf-8');
};
