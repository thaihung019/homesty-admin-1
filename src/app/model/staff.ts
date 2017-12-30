export interface IStaff {
  username?: string;
  password?: string;
  fullName?: string;
  dob?: string;
  gender?: boolean;
  phone1?: string;
  phone2?: string;
  email?: string;
  address?: string;
  role?: EnumStaffRole;
  position?: string;
  avatar?: string;
}

export enum EnumStaffRole {
  Admin,
  Receptionist,
  Staff
}
