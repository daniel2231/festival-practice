const makeNavBar = () => {
    return `
        <nav>
            hihi i'm nav bar
        </nav>
    `
};

const el = (htmlString) => {
    const div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.children[0];
}

const navBarElement = el(makeNavBar());

document.onload = () => {
    document.body.appendChild(navBarElement);
}
