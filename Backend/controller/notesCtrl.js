const notesModel = require("../Model/notes");


const createNotes = async (req, res) => {
    const body = req.body;
    try {
        
            //check if message is empty
        if (body.message === "" || body.message === "") {
            res.status(404).json({ message: "message or title shouldn't be empty" })
        }
        const saveData = await notesModel.create({
            tilte: body.tilte,
            message: body.message,
            category: body.category
        })
        res.status(200).json({message: "notes saved successfully", data: saveData})
    
    } catch (error) {
        res.status(500).json({message: 'server error'})
    }
}

const getAllNotes = async (req, res) => {
    try {
        //find(): if we want to fetch all the data
        const notes = await notesModel.find()
        res.json({ message: "notes sent successfully",data: notes })
    } catch (error) {
        res.status(500).json({ message: 'error fetching the notes' })
        
    }

} 

const updateNotes = async (req, res) => {

    try {
        //http://localhost:8000/api/updateNotes/53263273
        const updated = await notesModel.findByIdAndUpdate(
            req.params.id, //which document to update
            req.body,  //the new data to update
            { new: true} //return the updated document instead of the old one
            )
            if (!updated) {
                res.status(404).json({message: 'notes not found!' })
            }
            
            res.status(200).json({ message: 'updated successfully', data:
                updated })

    } catch (error) {
        res.status(500).json({ message: 'error updating note',
            error })
    }  
}

const deleteNotes = async (req, res) => {
    try {
        const deleted = await notesModel.findByIdAndDelete(req.params.id)

        if (!deleted) {
            res.status(404).json({ message: 'notes not found '})
        }
        res.status(200).json({ message: 'notes deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: 'error deleting notes', error })
    }
}

module.exports = {
    createNotes,
    getAllNotes,
    updateNotes,
    deleteNotes
}