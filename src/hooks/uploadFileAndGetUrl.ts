export async function uploadFileAndGetUrl(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch('http://localhost:8080/api/v1/upload', {
    method: 'POST',
    body: formData,
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'), // якщо потрібна авторизація
    },
  });

  if (!res.ok) throw new Error('Ошибка загрузки файла');

  const data = await res.json();
  return data.url;
}
