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

    return (
        <div class="flex justify-center">
            <div class="flex grid gap-4 grid-cols-3 grid-rows-3">
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
            </div>
        </div>
    );
}
