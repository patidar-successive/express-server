class TraineeController{

    constructor(){}

        traineeGetRouter = function (req, res) {
            res.send('this is get');
        };
    
        traineePostRouter = function (req, res) {
            res.send('Got a POST request')
        };
    
        traineePutRouter = function (req, res) {
           res.send('Got a PUT request at about')
        };

        traineeDeleteRouter = function (req, res) {
            res.send('Got a DELETE request at about')
        };
    }
export default TraineeController;
