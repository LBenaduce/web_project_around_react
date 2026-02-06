class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(res.status);
  }

  _request(path, options = {}) {
    const headers = { ...this._headers, ...(options.headers || {}) };

    return fetch(`${this._baseUrl}${path}`, {
      ...options,
      headers,
    }).then(this._handleResponse);
  }

  getUserInfo() {
    return this._request("/users/me");
  }

  getCardList() {
    return this._request("/cards");
  }

  setUserInfo({ name, about }) {
    return this._request("/users/me", {
      method: "PATCH",
      body: JSON.stringify({ name, about }),
    });
  }

  setUserAvatar({ avatar }) {
    return this._request("/users/me/avatar", {
      method: "PATCH",
      body: JSON.stringify({ avatar }),
    });
  }

  addCard({ name, link }) {
    return this._request("/cards", {
      method: "POST",
      body: JSON.stringify({ name, link }),
    });
  }

  deleteCard(cardId) {
    return this._request(`/cards/${cardId}`, { method: "DELETE" });
  }

  changeLikeCardStatus(cardId, like) {
    return this._request(`/cards/${cardId}/likes`, {
      method: like ? "PUT" : "DELETE",
    });
  }
}

const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "adff5c08-3ae6-4a3f-946a-a5d358b00cad",
    "Content-Type": "application/json",
  },
});

export default api;
