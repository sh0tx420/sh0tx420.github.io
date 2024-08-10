import MDFile from "@/components/mdfile";

export default function Portfolio() {
    return (
        <div>
            helo привет здарова

            <div className="flex mt-10 max-w-fit mx-auto p-3 mb-[40vh] bg-neutral-800 rounded-md shadow-lg">
                <div className="p-2" id="mdfile">
                    <MDFile />
                </div>
            </div>
        </div>
    );
}
