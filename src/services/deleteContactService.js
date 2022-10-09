import http from "./httpService";

export default function deleteContactService(id) {
  return http.delete(`/contacts/${id}`);
}
