
export const fetchData = (page,tab) => fetch(`https://cnodejs.org/api/v1/topics?page=${page}&limit=10&tab=${tab}`, { mode: "cors" }).then(data => data.json())
export const getDetail = (id) => fetch(`https://cnodejs.org/api/v1/topic/${id}`).then((response) => response.json()); 