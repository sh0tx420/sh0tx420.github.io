function NavButton(props) {
    return (
        <button style={{
            "outline": "none",
            "box-shadow": "none",
            "width": "fit-content"
        }}>
            {props.text}
        </button>
    );
}

export default function Navbar() {
    return (
        <div style={{
            "width": "100%",
            "height": "50px",
            "background-color": "#1C1E1F"
        }}>
            <div style="display: flex">
                <h5>funny website</h5>
                <NavButton text="allah"></NavButton>
            </div>
        </div>
    );
}
