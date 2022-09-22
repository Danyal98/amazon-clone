import { backendRoot } from '../backendInfo'

const manager = {
    getItems: (setItems) => {
        fetch(backendRoot + `/api/listitems/`, {
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
    }
}

export default manager