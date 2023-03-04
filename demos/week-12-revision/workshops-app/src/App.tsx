import WorkshopsList from "./WorkshopsList";

const App = () => {
    const format ="compact";
    
    // React element (internally an object that represents the UI)
    // JSX is convenient way to create React element
    const el = (
        <div className="container my-4">
            <h1>Workshops App</h1>
            <hr />
            {/*
                props -> {
                    format: 'compact',
                    x: 100
                }
            */}
            <WorkshopsList
                format={format}
                x={100}
                // foo={() => { return true; }}
            />
        </div>
    );

    console.log(el);
    
    return el;
};

export default App;
