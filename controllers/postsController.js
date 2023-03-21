const {default: axios} = require("axios")

const getPosts = async (req, res) => {


    try{
        const posts = await axios.get("https://jsonplaceholder.typicode.com/posts")

        if (posts) {
            res.status(200).json({
                msg: "Lista de posteos de JSON Placeholder",
                statusCode: 200,
                clients: posts.data,
            })
        }else{
            res.status(404).json({
                msg: "Aún no puedes ver la lista de posteos, intenta mas tarde",
                statusCode: 404,
                posts: null,
            })
        }

    }catch(error){
        res.status(500).json({
            msg: "Error - " + error.message,
            statusCode: 500,
        })
    }
}

module.exports = {getPosts}