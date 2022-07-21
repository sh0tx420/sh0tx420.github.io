export default function Navbar() {
    return (
        <nav class="flex py-3 bg-gray-900">
            <div class="px-6">
                <div>
                    <a class="text-xl font-bold text-white" href="#">sh0tx420.github.io</a>
                    <button class="ml-3 h-10 bg-red-900 rounded-lg p-2">
                        <a class="text-white" href="/">Home</a>
                    </button>
                    <button class="ml-3 h-10 bg-red-900 rounded-lg p-2">
                        <a class="text-white" href="/blog">Blog</a>
                    </button>
                </div>
            </div>
        </nav>
    );
}
