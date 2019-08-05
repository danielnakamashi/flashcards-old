export default interface User {
  displayName: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  phoneNumber: string | null;
  photoURL: string;
  providerData: {
    displayName: string;
    email: string;
    phoneNumber: string | null;
    photoURL: string;
    providerId: string;
    uid: string;
  }[];
  uid: string;
}
