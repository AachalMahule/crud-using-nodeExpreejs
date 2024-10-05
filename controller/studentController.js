import StudentModel from "../models/student.js"
class studentController {
    //create doc
    static createDoc = async(req, res) => {
        console.log("create doc post method");
        // console.log(req.body.name);
        // console.log(req.body);

        const { name, age, fees } = req.body
        const doc = new StudentModel({
            name: name,
            age: age,
            fees: fees
        })

        //saving doc
        const result = await doc.save()
        console.log(result);

        res.redirect("/student")
    }

    static getAllDoc = async(req, res) => { //read doc
        try {
            const result = await StudentModel.find()
                // console.log(result);
            res.render("index", { data: result })
        } catch (error) {
            console.log(error);

        }
    }

    //show edit form with data
    static editDoc = async(req, res) => {
        // console.log(req.params.id);
        try {
            const result = await StudentModel.findById(req.params.id)
                // console.log(result);
            res.render("edit", { data: result })
        } catch (error) {
            console.log(error);

        }

    }

    //update doc
    static UpdateDocById = async(req, res) => {
        //console.log(req.params.id);
        //console.log(req.boby);
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            console.log(result);
            res.render("/student")
        } catch (error) {
            console.log(error);

        }

    }
    static deleteDocById = async(req, res) => {
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            res.render("/student")
        } catch (error) {

        }

    }
}
export default studentController