const API = "http://192.168.1.100:3000/tasks"

export const getRutasLecturista = async () => {
    const res = await fetch(API);
    return await res.json();
}

export const getTask = async (id) => {
    const res = await fetch(`${API}/${id}`);
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

export const deleteTask = async (id) => {
    await fetch(`${API}/${id}`, {
        method: "DELETE"
    })
}

export const updateTask = async (id, newTask) => {
    //console.log(id, newTask)
    const res = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
            Accept: 'application/json', 'Content-Type':'application/json'
        },
        body: JSON.stringify(newTask),
    })
    return res 
}