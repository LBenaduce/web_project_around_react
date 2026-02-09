class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) return res.json();
    return res.text().then((text) => Promise.reject(text));
  }

  _request(path, options = {}) {
    return fetch(`${this._baseUrl}${path}`, {
      headers: this._headers,
      ...options,
    }).then(this._handleResponse);
  }

  getUserInfo() {
    return this._request("/users/me");
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

  getCardList() {
    return this._request("/cards");
  }

  addCard({ name, link }) {
    return this._request("/cards", {
      method: "POST",
      body: JSON.stringify({ name, link }),
    });
  }

  deleteCard(cardId) {
    return this._request(`/cards/${cardId}`, {
      method: "DELETE",
    });
  }

  changeLikeCardStatus(cardId, shouldLike) {
  return this._request(`/cards/${cardId}/likes`, {
    method: shouldLike ? "PUT" : "DELETE",
  });
}
}

const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "6f52aaa4-1ad3-40e3-9da3-068576075181",
    "Content-Type": "application/json",
  },
});

export default api;
