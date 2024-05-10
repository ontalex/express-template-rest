class Template2 {

    temp2_get = (req, res) => {
        try {
            return res.json({
                message: "Answer"
            })
        } catch (error) {
            console.error("ERROR:", error);
            return res.json({
                message: "Error",
            })
        }
    }

}

export default new Template2();