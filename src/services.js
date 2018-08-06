
export const fetchData = (page) => fetch(`https://cnodejs.org/api/v1/topics?page=${page}&limit=10`,{ mode: "cors"}).then(data=>data.json())
export const getDetail = (id) => fetch(`https://cnodejs.org/api/v1/topic/${id}`).then((response) => response.json()); 