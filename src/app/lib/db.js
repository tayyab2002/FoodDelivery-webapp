const {username , password} = process.env;
export const connectionStr = "mongodb+srv://"+username+":"+password+"@cluster0.qq8jr.mongodb.net/FedoApp?retryWrites=true&w=majority&appName=Cluster0"