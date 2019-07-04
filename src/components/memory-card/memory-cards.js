const createMemoryCard = ({nameClass, src, alt}) => `
    <article class="memory-card ${nameClass}">
        <img
            src="${src}"
            alt="${alt}"
                nameClass === '-front' ? "Icone do livro C++" : "Gueio Mascote da CollabCode"}"
            class="icon"
            onClick = "handleClick()"
        />
    </article>
`;

const handleClick = () => console.log('AE');