import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useEffect, useState } from "react";

let sr: MDXRemoteSerializeResult;

export default function MDFile() {
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://raw.githubusercontent.com/sh0tx420/sh0tx420/main/README.md");
            const restext = await res.text();
            sr = await serialize(restext);

            setLoaded(true);

        };

        fetchData();
    });

    return loaded ? <MDXRemote {...sr} /> : <div>Loading...</div>;
}
