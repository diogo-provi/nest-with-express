import * as yup from 'yup';

export const UserSchema = yup.object({
  id: yup.number().required(),
  name: yup.string().required().min(3).max(10),
});
