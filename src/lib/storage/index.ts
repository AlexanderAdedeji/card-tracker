import { EncryptStorage } from 'encrypt-storage';



export const encryptStorage = new EncryptStorage(import.meta.env.VITE_STORAGE_SECRET, {
    storageType: 'sessionStorage'
});
