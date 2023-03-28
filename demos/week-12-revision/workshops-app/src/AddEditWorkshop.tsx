import { FormEvent, useRef } from 'react';
import { useWorkshops } from './contexts/workshops';
import IWorkshop from "./models/IWorkshop";
import { postWorkshop, patchWorkshop } from "./services/workshops";

type Props = {
    // workshop?: IWorkshop,
}

const AddEditWorkshop = ( { /* workshop */ } : Props ) => {
    const { addWorkshop, workshopBeingEdited, updateWorkshopWithId } = useWorkshops();

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
            if( workshopBeingEdited ) {
                const updatedWorkshop = await patchWorkshop( workshopBeingEdited.id, workshop );
                alert( `Successfully updated workshop "${updatedWorkshop.name}" with id="${updatedWorkshop.id}"` );
                // we need to add to the list of workshops in this app
                updateWorkshopWithId( workshopBeingEdited.id, updatedWorkshop );
            } else {
                const addedWorkshop = await postWorkshop( workshop );
                alert( `Successfully added workshop "${addedWorkshop.name}" with id="${addedWorkshop.id}"` );
                // we need to add to the list of workshops in this app
                addWorkshop( addedWorkshop );
            }
        } catch( error ) {
            alert( (error as Error).message );
        }
    };

    return (
        <>
            <h2>{workshopBeingEdited ? 'Edit' : 'Add'} Workshop</h2>
            <hr />
            <form onSubmit={addEditWorkshop}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" ref={nameRef} defaultValue={workshopBeingEdited ? workshopBeingEdited.name : ''} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" ref={descriptionRef} defaultValue={workshopBeingEdited ? workshopBeingEdited.description : ''}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="imageUrl" className="form-label">Image URL</label>
                    <input type="url" className="form-control" id="imageUrl" ref={imageUrlRef} defaultValue={workshopBeingEdited ? workshopBeingEdited.imageUrl : ''} />
                </div>
                <div className="mb-3">
                    <input type="submit" value="Add/Edit a workshop" className="btn btn-primary" />
                </div>
            </form>
        </>
    );
}
 
export default AddEditWorkshop;