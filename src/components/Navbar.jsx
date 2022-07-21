export default function Navbar() {
    return (
        <nav class="flex py-3 bg-gray-900 mb-2">
            <div class="px-6">
                <div>
                    <a class="text-xl font-bold" href="#">sh0tx420.github.io</a>
                    <button class="ml-3 h-10 bg-blue-700 hover:bg-blue-600 rounded-lg p-2">
                        <a href="/">Home</a>
                    </button>
                    <button class="ml-3 h-10 bg-blue-700 hover:bg-blue-600 rounded-lg p-2">
                        <a href="/blog">Blog</a>
                    </button>
                </div>
            </div>
        </nav>
    );
}
