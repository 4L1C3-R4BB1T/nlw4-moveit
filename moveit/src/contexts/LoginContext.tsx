import { createContext, ReactNode, useState } from "react";

interface LoginContextData {
    name: string;
    image_url: string;
    fetchUserData: (username: string) => void;
}

interface LoginProviderProps {
    children: ReactNode;
}

export const LoginContext = createContext({} as LoginContextData);

export function LoginProvider({ children }: LoginProviderProps) {
    const [name, setName] = useState("Guest");
    const [image_url, setImage_url] = useState("/preview.png");

    function fetchUserData(username: string) {
        let url = `https://api.github.com/users/${username}`;

        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, false);

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                let data = JSON.parse(xhttp.responseText);
                setName(data.name);
                setImage_url(data.avatar_url);
                console.log(data);
            } else if (xhttp.status == 404) {
                // provisional
                alert("Usuário não encontrado! Você entrará como visitante.");
            }
        }

        xhttp.send();
    }

    return (
        <LoginContext.Provider
            value={{
                name,
                image_url,
                fetchUserData
            }}
        >
            {children}
        </LoginContext.Provider>
    );
}
