export default class ServesServer {
  baseUrl = '//////';

  async registration(date) {
    const response = await fetch(`${this.baseUrl}/users`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(date),
    });

    const result = await response.json();
    return result;
  }

  async authorization(date) {
    const response = await fetch(`${this.baseUrl}/users/login`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(date),
    });

    const result = await response.json();
    return result;
  }
}
