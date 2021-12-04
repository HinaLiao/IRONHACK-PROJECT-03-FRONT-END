import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

const setHeader = (token) => ({ headers: { Authorization: `Bearer ${token}` } });

export const login = async (code) => {
  const response = api.post('/auth/login', { code });
  return response;
};

export const retrieveUser = async (token) => {
  const response = api.get('/retrieveUser', setHeader(token));
  return response;
};

export const retriveCompanies = async (filterName, grade) => {
  let uri = '';
  if (grade === '0') {
    uri = 'all';
  } else {
    uri = `grade${grade}`;
  }
  const response = await api.get(`/companies/getAll/${uri}?name=${filterName}`);
  return response;
};

export const retrieveCompaniesNames = async (search = '') => {
  const response = api.get(`/companies/getName?name=${search}`);
  return response;
};

export const retrieveAssessmentsById = async (companyId) => {
  const response = api.get(`/companies/assessment/${companyId}`);
  return response;
};

export const createAssessment = async (assessmentForm, token) => {
  await api.post(
    'http://localhost:5000/assessments/createAssessment',
    assessmentForm,
    setHeader(token),
  );
};
