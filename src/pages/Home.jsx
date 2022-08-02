import { For } from "solid-js";

export default function Home() {
    const img_size = 32;
    const langs = [
        "html5",
        "css3",
        "js",
        "ts",
        "py",
        "lang_c",
        "nodejs"
    ];
    const fwks = [
        "nodejs",
        "react",
        "vue"
    ];

    return <>
        <div class="flex justify-center">
            <div class="flex grid gap-4 grid-cols-2">
                <div class="bg-gray-900 rounded-lg p-2">
                    <h1 class="text-center font-bold mb-2">Languages & frameworks</h1>
                    <For each={langs}>
                        {lang => <img src={`/src/assets/logos/logo_${lang}.png`} width={img_size} height={img_size} class="float-left mr-1" />}
                    </For>

                    <br />
                    <div class="mt-7" />

                    <For each={fwks}>
                        {framework => <img src={`/src/assets/logos/logo_${framework}.png`} width={img_size} height={img_size} class="float-left mr-1" />}
                    </For>
                </div>
                <div class="bg-gray-900 rounded-lg p-2">
                    <h1 class="text-center font-bold mb-2">About</h1>
                    <div class="text-center">
                        i do programming :D
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <div class="mt-5 w-1/3">
                <div class="bg-gray-900 rounded-lg p-2">
                    <h1 class="text-center font-bold mb-2">Projects</h1>
                    <div class="flex grid gap-4 grid-rows-2">
                        <div class="flex justify-center">
                            <a class="bg-blue-900 hover:bg-blue-800 rounded-lg w-full p-2" href="https://bn-servers.cf">
                                <h1 class="font-bold text-lg">Boundless Networks</h1>
                                A network of game servers for Source-based games.
                            </a>
                        </div>
                        <div class="flex justify-center">
                            <a class="bg-blue-900 hover:bg-blue-800 rounded-lg w-full p-2" href="https://nanoarch.net">
                                <h1 class="font-bold text-lg">NanoArch</h1>
                                Fast and powerful all-purpose Discord bot.
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
