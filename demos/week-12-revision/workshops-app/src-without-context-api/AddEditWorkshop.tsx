import { FormEvent, useRef } from 'react';
import IWorkshop from "./models/IWorkshop";
import { postWorkshop } from "./services/workshops";

type Props = {
    workshop?: IWorkshop,
    addWorkshop: Function
}

const AddEditWorkshop = ( { workshop, addWorkshop } : Props ) => {
    const nameRef = useRef<HTMLInputElement>( null );
    const descriptionRef = useRef<HTMLTextAreaElement>( null );
    const imageUrlRef = useRef<HTMLInputElement>( null );

    const addEditWorkshop = async ( event : FormEvent ) => {
        // prevent browser submission (since we are going to submit the data ourselves)
        event.preventDefault();

        const name = (nameRef.current as HTMLInputElement).value;
        const description = (descriptionRef.current as HTMLTextAreaElement).value;
        const imageUrl = (imageUrlRef.current as HTMLInputElement).value;

        const workshop = {
            name,
            description,
            imageUrl
        };

        // console.log( workshop );

        try {
            const addedWorkshop = await postWorkshop( workshop );
            alert( `Successfully added workshop "${addedWorkshop.name}" with id="${addedWorkshop.id}"` );
            // we need to add to the list of workshops in this app
            addWorkshop( addedWorkshop );
        } catch( error ) {
            alert( (error as Error).message );
        }
    };

    return (
        <>
            <h2>Add / Edit Workshop</h2>
            <hr />
            <form onSubmit={addEditWorkshop}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" ref={nameRef} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" ref={descriptionRef}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="imageUrl" className="form-label">Image URL</label>
                    <input type="url" className="form-control" id="imageUrl" ref={imageUrlRef} />
                </div>
                <div className="mb-3">
                    <input type="submit" value="Add/Edit a workshop" className="btn btn-primary" />
                </div>
            </form>
        </>
    );
}
 
export default AddEditWorkshop;