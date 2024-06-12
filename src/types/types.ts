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
  showButtons: boolean;
};

export type userData = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export interface AsyncGetState {
  data: userData[];
  isLoading: boolean;
  isError: string;
}
