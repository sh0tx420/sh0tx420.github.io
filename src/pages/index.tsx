import { FormEvent } from "react";

export default function Home() {
    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault(); // Prevent default functionality of form submit

        // TS compiler causes an error here thinking this isn't the way to handle event.target.. smh
        // @ts-ignore
        const text: string = event.target[0].value;

        // Check if running in a browser env
        if (typeof window !== undefined) {
            // Construct URL and open DDG window
            let url = "https://duckduckgo.com/?q=";
            url += text.replaceAll(" ", "+");

            window.open(url, "_blank");
        }
    };

    return <>
        <div className="flex flex-col items-center p-12">
            <form onSubmit={handleFormSubmit}>
                Search:
                <div className="flex flex-row">
                    <input
                        id="searchbar"
                        type="text"
                        className="bg-neutral-700 p-2 outline-none border-2 border-transparent focus:border-sky-600 rounded shadow-md"
                        maxLength={4095}
                    />
                    <button type="submit" className="bg-sky-500 hover:bg-sky-300 w-10 min-w-10 ml-2 rounded shadow-md">
                        🔍
                    </button>
                </div>
            </form>
        </div>
        
        <div className="flex h-full">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    </>;
}
