const express=require('express')

const router=express();


const taskdetails= require('../models/task')

// router.post('/tasks',async(req,res)=>{
//     try {
//         const data=req.body;

//         const result=await Task.create(data);
//         if(!result)
//         {
//             res.status(500).send("Task not created")

//         }
//         res.status(200).json({result});

//     } catch (error) {
//         console.log(error)
//     }
// })



// router.get('/task',async(req,res)=>{

//     try{
//         const details = await Task.find();
//         res.json(details);
//     }
//     catch (error) {
//     console.log(error);
//     res.status(500).json();
//   }
// })

// router.put("/tasks/:id", async (req, res) => {

// console.log("editing;")
//   const data = req.body;
//   console.log(data);
//   const tasktitle = req.params.id;
//   console.log(tasktitle);
  
//   try {
//     const result = await Task.findOneAndUpdate(
//       {title: tasktitle },
//       req.body,
//       { new: true, runValidators: true }
//     );
//     if (!result) {
//       return res.status(404).send("Task not found");
//     }
//     res.status(200).send("Task updated ");
//   } catch (error) {
//     res.status(500).send("Server error");
//   }
// });


router.get("/tasks",async(req,res)=>{

    try{
        const details = await taskdetails.find({});
        console.log(details);
        res.json(details);
    }
    catch (error) {
    console.log(error);
    res.status(500).json();
  }
})

router.post("/tasks", async (req, res) => {
  try {
    console.log("adding task")
    const data = req.body;
    const result = await taskdetails.create(data);
    res.status(201).json(result);
  } 
  
  catch (error) {
    console.log(error);
    res.status(500).json();
  }
});



router.put("/tasks/:id", async (req, res) => {

    console.log("editing;")
  const data = req.body;
  console.log(data);
  const tasktitle = req.params.id;
  console.log(tasktitle);
  
  try {
    const result = await taskdetails.findOneAndUpdate(
      {title: tasktitle },
      req.body,
      { new: true, runValidators: true }
    );
    if (!result) {
      return res.status(404).send("Task not found");
    }
    res.status(200).send("Task updated ");
  } catch (error) {
    res.status(500).send("Server error");
  }
});


router.delete('/tasks/:id',async(req,res)=>{
    try{
        console.log("delete");
        const data=req.params.id;
        console.log(data);
        const result=await taskdetails.findOneAndDelete({ title: data })
        if (!result) {
        return res.status(404).send("Task not found");
    }
    res.send("Task deleted successfully");
  } catch (error) {
    res.status(500).send("error");
  }
})


module.exports=router;
