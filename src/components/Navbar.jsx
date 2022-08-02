export default function Navbar() {

    return (
        <nav class="flex py-3 bg-gray-900 mb-2">
            <a class="ml-4 font-bold text-2xl" href="#">sh0tx420.github.io</a>
            <div class="flex grid grid-cols-2 gap-4 px-6">
                <a class="bg-blue-700 hover:bg-blue-600 rounded-lg p-2 text-center" href="/">
                    Home
                </a>
                <a class="bg-blue-700 hover:bg-blue-600 rounded-lg p-2 text-center" href="/blog">
                    Blog
                </a>
            </div>
        </nav>
    );
}
