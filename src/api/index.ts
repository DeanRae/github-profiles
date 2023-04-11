async function fetchData<TResponse>(url:string, config: RequestInit = {}): Promise<TResponse> {
    const response = await fetch(url, config);
    return await response.json();
}

const api = {
    get: <TResponse>(url: string) => 
    fetchData<TResponse>(url)
};

export default api;