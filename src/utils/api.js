class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Erro: ${res.status}`);
  }

  _request(url, options) {
    return fetch(`${this._baseUrl}${url}`, options).then(this._handleResponse);
  }

  getUserInfo() {
    return this._request("/users/me", {
      headers: this._headers,
    });
  }

  setUserInfo({ name, about }) {
    return this._request("/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name, about }),
    });
  }

  getCardList() {
    return this._request("/cards", {
      headers: this._headers,
    });
  }

  addCard({ name, link }) {
    return this._request("/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    });
  }

  deleteCard(cardId) {
    return this._request(`/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  changeLikeCardStatus(cardId, isLiked) {
    return this._request(`/cards/${cardId}/likes`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: this._headers,
    });
  }

  setUserAvatar({ avatar }) {
    return this._request("/users/me/avatar", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar }),
    });
  }
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/<COHORT_ID>",
  headers: {
    authorization: "<SEU_TOKEN_AQUI>",
    "Content-Type": "application/json",
  },
});

export default api;
