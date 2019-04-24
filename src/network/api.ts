import client from './client';

const apiRequests = {
  getUsers: () => client.get('https://api.github.com/users'),
};

export default apiRequests;
