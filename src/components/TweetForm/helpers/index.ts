import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { storage } from '@//firebase';

// eslint-disable-next-line consistent-return
export const uploadImageToStorage = async (imageFile: File): Promise<string | undefined> => {
  const tweetRef = ref(storage, `tweets/${imageFile.name}`);

  try {
    await uploadBytes(tweetRef, imageFile);
    const imageUrl = await getDownloadURL(tweetRef);

    return imageUrl;
  } catch (error) {
    console.error(error);
  }
};
