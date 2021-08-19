
export default function Section({ children, id }) {
    return (
        <div>
            <section id={id}>
                {children}
            </section>
            <hr/>
        </div>
        
    );
}