// export default function TabButton({ children }) {
//     return (
//         <li>
//             <button>{children}</button>
//         </li>
//     );
// }

export default function TabButton({ label }) {
    function handleClick() {
        console.log('Handle CLick');
    }

    return (
        <li>
            <button onClick={handleClick}>{label}</button>
        </li>
    );
}