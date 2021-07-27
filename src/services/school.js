class school{


    async addStudent(f, l, m) {

        if(f!=='' && l!=='' && m!==''){
            let response = await fetch('https://mysql-express-first-deploy.herokuapp.com/addStudent', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                fName: f,
                lName: l,
                major: m
            })
            })

            console.log(response.status);
            return await response.json();
          
        }
        return {message:"No input!"};

    }

    async home (){
        const list = await fetch(`https://mysql-express-first-deploy.herokuapp.com/`);
        console.log(list);
        return await list.json();
    }

    async student(id){
        let list;
        if(!isNaN(parseFloat(id)) && isFinite(id)) list = await fetch(`https://mysql-express-first-deploy.herokuapp.com/students/${id}`);
        else list = await fetch(`https://mysql-express-first-deploy.herokuapp.com/major/${id}`);
        console.log(list.status);
        if(list.status === 404) return(
            {
                id: "Not Found",
                fName: "",
                lName: "",
                major: ""
            }
        )
        if(list.status === 403) return(
             {
                id: "",
                fName: "",
                lName: "",
                major: ""
            }
        )
        return await list.json();
        
        // if(id) {
        //     const list = await fetch(`http://10.0.0.112:3001/students/${id}`);
        //     console.log(list);
        //     return await list.json();
        // }
        // else {
        //     const list = await fetch(`http://10.0.0.112:3001/students`);
        //     console.log(list);
        //     return await list.json();
        // }

    }
}
export default school;