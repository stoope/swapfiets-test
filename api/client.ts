const BASE_URL = "https://bikeindex.org:443/api/";

const httpClient = {
  async get<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(BASE_URL + url, options);
    const result = await response.json();
    return result;
  },
};

export { httpClient };
