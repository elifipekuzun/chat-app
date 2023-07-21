export enum InputType {
  text = 'text',
  password = 'password',
}

export type ValidType = {
  [key: string]: {
    value: boolean | RegExp | number;
    message: string;
  };
};

interface InputValidation {
  name: string;
  label: string;
  type: InputType;
  validation: ValidType;
}

export const username_validation: InputValidation = {
  name: 'username',
  label: 'Username',
  type: InputType.text,
  validation: {
    required: {
      value: true,
      message: 'Required!',
    },
    minLength: {
      value: 3,
      message: 'Min 3 characters',
    },
  },
};

export const groupName_validation: InputValidation = {
  name: 'groupname',
  label: 'Group Name',
  type: InputType.text,
  validation: {
    required: {
      value: true,
      message: 'Required!',
    },
    minLength: {
      value: 5,
      message: 'Min 5 characters',
    },
  },
};
