function NavButton(props) {
    return (
        <button style={{
            "outline": "none",
            "box-shadow": "none"
        }}>
            {props.text}
        </button>
    );
}

export default function Navbar() {
    return (
        <div style={{
            "width": "18vw",
            "height": "100vh",
            "background-color": "#1C1E1F"
        }}>
            <h5 style="text-align: center">funny website</h5>
            <NavButton text="allah"></NavButton>
        </div>
    );
}
