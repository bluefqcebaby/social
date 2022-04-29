import $api from "../http";

export function getUsers(page, count = 8) {
  return $api.get(`/users?page=${page}&count=${count}`);
}

export function getProfile(index = 1) {
  return $api.get(`/profile/${index}`);
}

export function checkAuth() {
  return $api.get("auth/me");
}

export function toggleFollowApi(id, followed) {
  return followed ? $api.delete(`/follow/${id}`) : $api.post(`/follow/${id}`);
}

export function getStatus(id) {
  return $api.get(`/profile/status/${id}`);
}
export function setStatus(text) {
  return $api.put("/profile/status", { status: text });
}
