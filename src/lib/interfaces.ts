export interface User {
    id?: string;
    firstname?: string;
    lastname?: string;
    password?: string;
    emailVerified?: Date | null;
    image?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
  }

  export interface Student {
    id: number;
    userId: string;
    address: string;
    birthday: string;
    bloodType: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    phone: string;
    sex: string;
    username: string;
    urlphoto: string;
    lieunaissance: string;
    nationalite: string;
  }
  
  export interface Teacher {
    id: number;
    userId: string;
    address: string;
    birthday: string;
    bloodType: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    phone: string;
    sex: string;
    username: string;
    urlphoto: string;
    lieunaissance: string;
    nationalite: string;
  }
  export interface Account {
    id: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string | null;
    access_token?: string | null;
    expires_at?: number | null;
    token_type?: string | null;
    scope?: string | null;
    id_token?: string | null;
    session_state?: string | null;
    createdAt: Date;
    updatedAt: Date;
  }
  export interface Session {
    id: string;
    sessionToken: string;
    userId: string;
    expires: Date;
    createdAt: Date;
    updatedAt: Date;
  }
  export interface VerificationToken {
    identifier: string;
    token: string;
    expires: Date;
  }
  export interface Authenticator {
    credentialID: string;
    userId: string;
    providerAccountId: string;
    credentialPublicKey: string;
    counter: number;
    credentialDeviceType: string;
    credentialBackedUp: boolean;
    transports?: string | null;
  }

  export interface AuthUser {
    id?: string;                // Identifiant unique (sub)
    email?: string;             // Adresse e-mail
    email_verified?: boolean;   // Si l'e-mail est vérifié
    name?: string;              // Nom complet
    given_name?: string;        // Prénom
    family_name?: string;       // Nom de famille
    picture?: string;           // URL de la photo de profil
    locale?: string;            // Langue préférée
    hd?: string;               // Domaine Google Apps (facultatif)
    phone_number?: string;     // Numéro de téléphone (rarement fourni)
  }

  export interface Personne {
  
  }
  
  export interface User {
    nom?: string
    prenoms?: string
    phone?: string
    email?: string
    displayName?:string
  }
  
  
          
  