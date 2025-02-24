type Props = {
    buttonLabel: String;
}

export default function Button({buttonLabel}: Props) {
    return (
        <button>
            {buttonLabel}
        </button>)
}