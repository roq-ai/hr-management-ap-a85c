const mapping: Record<string, string> = {
  applications: 'application',
  companies: 'company',
  employees: 'employee',
  'hr-managers': 'hr_manager',
  'job-postings': 'job_posting',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
