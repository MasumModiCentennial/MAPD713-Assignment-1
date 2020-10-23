import { addNewPatient, 
    getAllPatients, 
    getPatientById} from '../controllers/controller'

const routes = (app) => {
    app.route('/patients')
        .get(getAllPatients)
        .post(addNewPatient)

    app.route('/patients/:patientId')
        .get(getPatientById)
}

export default routes;