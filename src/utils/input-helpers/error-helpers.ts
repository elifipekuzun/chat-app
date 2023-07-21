import {FieldErrors, FieldValues} from 'react-hook-form';

export const findInputErrors = (
  errors: FieldErrors<FieldValues>,
  name: string,
) => {
  const filtered = Object.keys(errors)
    .filter(key => key.includes(name))
    .reduce((prev, current) => {
      return Object.assign(prev, {error: errors[current]});
    }, {});
  return filtered;
};

export const isFormInvalid = (err: any) => {
  // eslint-disable-next-line curly
  if (Object.keys(err).length > 0) return true;
  return false;
};
