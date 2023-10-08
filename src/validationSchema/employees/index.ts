import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  job_title: yup.string().required(),
  salary: yup.number().integer().required(),
  date_hired: yup.date().required(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
