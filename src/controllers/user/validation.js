const validation = {
    login:{
        email:{
            required: true,
            regex:'',
            in:['body'],
            errorMessage: 'Email is required'
        },
    password:{
                required: true,
                in: ['body'],
                errorMessage: 'password is required'
        }
    }
}
export default validation;
