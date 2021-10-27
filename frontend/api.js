const API = "http://192.168.1.122:3000/tasks"
//const API = "https://jsonplaceholder.typicode.com/users"
export const getRutasLecturista = async () => {
    const res = await fetch(API);
    return await res.json();
}

export const saveTask = async (newTask) => {
    const res = await fetch(API, { 
        method: 'POST', 
        headers: {
            Accept: 'application/json', 'Content-Type':'application/json'
        },
        body: JSON.stringify(newTask)
    })
    return await res.json();
}