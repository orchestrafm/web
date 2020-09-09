const baseurl = "https://orchestra.fm/api/v0"

export default {
    async login(username, password) {
        const res = await fetch(baseurl + "/authorize/basic", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        if (res.ok)
            return await res.json();
        else
            throw new Error(res.statusText);
    },
    async register(username, password, email, invite_code) {
        const res = await fetch(baseurl + "/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
                "email": email,
                "invite_code": invite_code
            })
        });

        if (res.ok)
            return await res.json();
        else
            throw new Error(res.statusText);
    }
}
