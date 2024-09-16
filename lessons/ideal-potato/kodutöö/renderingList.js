const towns = [
    { title: 'Tallin', id: 1 },
    { title: 'Tartu', id: 2 },
    { title: 'Narva', id: 3 },
];

export default function Traveling() {
    const listItems = towns.map(town =>
        <li key={town.id}>
            {town.title}
        </li>
    );

    return (
        <ul>
            {listItems}
        </ul>
    );
}