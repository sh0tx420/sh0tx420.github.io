function NavButton(props) {
    return (
        <button style={{
            "border-radius": "0px",
            "background-color": "#1C1E1F",
            "border-color": "#1C1E1F",
            "outline": "none",
            "box-shadow": "none",
            "text-align": "left"
        }}>
            {props.text}
            <i
                style={{
                    "position": "revert",
                    "right": "0px"
                }}
                class="fas fa-chevron-down" />
        </button>
    );
}

export default function Sidebar() {
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
