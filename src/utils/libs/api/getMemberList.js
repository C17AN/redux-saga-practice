export const getMemberList = async () => {
  const res = await fetch("http://localhost:5000/member");
  const data = await res.json();
  return data;
};
