let baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const authConfig = {
  account: baseUrl + '/private/user/me',
  login: baseUrl + '/public/login',
  logout: baseUrl + '/private/user/logout',
  register: baseUrl + '/public/register',
  sessionCookieName: 'sessionID',

  userDataName: 'userData',
};

export default authConfig;
