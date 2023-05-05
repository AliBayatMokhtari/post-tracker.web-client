export interface User {
  username: Username;
  fullName: FullName;
  id: Id;
}

export interface IAuthenticatedUser {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  user: IUser;
  expires_at: number;
}

export interface IUser {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: IAppMetadata;
  user_metadata: IUserMetadata;
  identities: IIdentity[];
  created_at: string;
  updated_at: string;
}

export interface IAppMetadata {
  provider: string;
  providers: string[];
}

export interface IIdentity {
  id: string;
  user_id: string;
  identity_data: IIdentityData;
  provider: string;
  last_sign_in_at: string;
  created_at: string;
  updated_at: string;
}

export interface IIdentityData {
  email: string;
  sub: string;
}

export interface IUserMetadata {}
