import { DotSpinner } from '@uiball/loaders'

function Loader() {
    return (
        <>
            <DotSpinner
                size={80}
                speed={0.9}
                color="black"
            />
            <h2> Cargando</h2>
        </>
    );
}

export default Loader;