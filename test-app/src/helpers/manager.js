import { backendRoot, fetchItems, getUsername } from '../backendInfo'

const manager = {
    getItems: (setItems) => {
        fetch(`${backendRoot}` + `${fetchItems}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (res.ok) return res.json();
                else console.log("An Error Occured");
            })
            .then((data) => {
                console.log("DEBUG :GET ITEMS FROM API", data);
                setItems(data)
            })
    },

    getUserName: (setUsername) => {
        fetch(`${backendRoot}` + `${getUsername}`, {
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('access_token'),
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (res.ok) return res.json();
                else console.log("An Error Occured");
            })
            .then((data) => {
                console.log("DEBUG :LOGGED IN USER", data);
                setUsername(data)
            })
    },
}

export default manager