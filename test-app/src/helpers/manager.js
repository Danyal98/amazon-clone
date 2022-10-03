import Cookie from 'universal-cookie';
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
                setItems(data)
            })
    },

    getUserName: (setUsername) => {
        const cookie = new Cookie();
        fetch(`${backendRoot}` + `${getUsername}`, {
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + cookie.get('access_token'),
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (res.ok) return res.json();
                else console.log("An Error Occured");
            })
            .then((data) => {
                setUsername(data)
            })
    },
}

export default manager