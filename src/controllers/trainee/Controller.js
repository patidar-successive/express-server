export class TraineeController{

    constructor(){}
    
        trainee_get_router = function (req, res) {
            res.send('this is get');
        };
    
        trainee_post_router = function (req, res) {
            res.send('Got a POST request')
        };
    
        trainee_put_router = function (req, res) {
           res.send('Got a PUT request at about')
        };

        trainee_delete_router = function (req, res) {
            res.send('Got a DELETE request at about')
        };
}
