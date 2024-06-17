import React from "react";

export interface countState {
  count: number;
}

export type OpenServices = {
  Count?: boolean;
  UsersOperationGET?: boolean;
  UsersAdvancedOperations?: boolean;
};

export interface setOpenServices {
  setOpenServices: React.Dispatch<React.SetStateAction<OpenServices>>;
}
export type serviceStateChanger = (nameOfService: keyof OpenServices) => void;

export interface setOpenServicesComponent extends setOpenServices {
  appName: string;
}
export type usersProps = {
  userData: userData;
  advancedOptions: boolean;
  editedContact: setEditedContact;
  setEditedContact: React.Dispatch<React.SetStateAction<setEditedContact>>;
};

export type userData = {
  [key: string]: string | number;
  id: number;
  name: string;
  username: string;
  email: string;
};

export interface AsyncGetState {
  data: userData[];
  isLoading: boolean;
  isError: string;
  query: string;
}

export type setEditedContact = boolean | number;
