export const apiMethods = {
    GET: 'GET',
    POST: 'POST',
  };

export const requestConfig: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    mode: 'cors',
    method: apiMethods.GET,
  };