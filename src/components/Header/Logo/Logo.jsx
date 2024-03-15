import "./Logo.scss";

export default function Logo() {
    return (
        <img
            className="logo__image"
            src="/img/marc_villevieille_logo.webp"
            alt="Logo"
            width={50}
            height={50}
            loading="lazy"
        />
    )
}