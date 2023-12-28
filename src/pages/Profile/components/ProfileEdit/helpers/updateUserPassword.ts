import { reauthenticateWithCredential, EmailAuthProvider, updatePassword } from 'firebase/auth';

import { auth } from '@//firebase';

export async function updateUserPassword(password: string, newPassword: string): Promise<void> {
  const user = auth.currentUser;
  const email = user?.email;
  if (user && email) {
    const credential = EmailAuthProvider.credential(email, password);
    await reauthenticateWithCredential(user, credential);
    await updatePassword(user, newPassword);
  }
}
