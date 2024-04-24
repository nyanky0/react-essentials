// export default function TabButton({ children }) {
//     return (
//         <li>
//             <button>{children}</button>
//         </li>
//     );
// }

export default function TabButton({ children, onSelect }) {

    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}