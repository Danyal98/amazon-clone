import Cookie from 'universal-cookie';
import { backendRoot, fetchItems, getUsername, addToBasket } from '../backendInfo'

const cookie = new Cookie();

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
                console.log('DEBUD DATA: ', data)
            })
    },

    add_to_basket: (item, setItems) => {
        fetch(`${backendRoot}` + `${addToBasket}` + `${item.id}/`, {
            method: "POST",
            headers: {
                Authorization: 'Bearer ' + cookie.get('access_token'),
                "Content-Type": "application/json",
            },
            body: item
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