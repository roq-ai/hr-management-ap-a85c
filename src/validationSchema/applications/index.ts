import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  job_posting_id: yup.string().nullable().required(),
  applicant_id: yup.string().nullable().required(),
});
