const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 2001
require('dotenv').config()


const { ObjectId } = require('mongodb')
const { SignupCreate } = require('./controller/UserController')



// middleware
app.use(express.json());
app.use(cors());



main().catch(err => console.log(err));
async function main() {
  // await mongoose.connect('mongodb://127.0.0.1:27017/TEST');
   const uri = "mongodb+srv://vishrutrela:IAMNITIAN@talenttrak-demo.42jfop4.mongodb.net/?retryWrites=true&w=majority";
  await mongoose.connect(uri);
  console.log("database connected");
}

const jobSchema = new mongoose.Schema({
  jobtitle : String,
  companyName: String,
  minPrice: Number,
  maxPrice: Number,
  salaryType : String,
  jobLocation : String,
  postingDate : Date,
  skills :[String],
  experienceLevel : String,
  companyLogo : String,
  employementType : String,
  description : String,
  postedBy : String
});

const JobModel = mongoose.model('jobmodel', jobSchema);


app.post("/post-job", async (req, res) => {
  const { jobtitle,
    companyName,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation ,
    
    postingDate ,  
    
    experienceLevel,
    companyLogo ,
    employementType,
    description,
    postedBy } = req.body;

    const skillsArrayFromFrontend = req.body.skillsArray;
    const skillsStringArray =
    skillsArrayFromFrontend && skillsArrayFromFrontend.length
      ? skillsArrayFromFrontend.map((skill) => skill.value)
      : [];

    

 
  const newJob= new JobModel({ jobtitle,
    companyName,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation ,
    postingDate ,
    experienceLevel,
    skills : skillsStringArray,
    companyLogo ,
    employementType,
    description,
    postedBy })
  
    

  newJob.save()
    .then((result) => {
      console.log('Document saved successfully:', result);
      res.status(200).json({ message: 'Data saved successfully' });
    })
    .catch((error) => {
      console.error('Error saving document:', error);
      res.status(500).json({ message: 'Error saving data' });
    });
});


//creating signin route

app.post("/signup",SignupCreate);

app.get("/all-jobs", async (req,res)=>{
  try{
    const data = await JobModel.find({})
    return res.status(200).json(data)

  }catch(err){
    console.error(err);
    return res.status(401).json({success:err.message})


  }
})

app.get("/all-jobs/:id", async(req,res)=>{
  const id = req.params.id;
  const job = await JobModel.findOne({_id:new ObjectId(id)})
  return res.status(200).json(job)
})

app.get("/my-jobs/:email", async (req,res)=>{
  console.log(req.params.email)
  const filterjobs = await JobModel.find({postedBy : req.params.email})
   return res.status(200).json(filterjobs)
})

app.delete("/job/:id", async (req, res) => {
console.log(req.params.id); 

  try {
    const result = await JobModel.deleteOne({ _id: req.params.id });

    if (result.deletedCount > 0) {
      return res.json({ acknowledged: true, message: "Job deleted successfully" });
    } else {
      return res.json({ acknowledged: false, message: "Job not found" });
    }
  } catch (error) {
    console.error("Error deleting job:", error);
    return res.status(500).json({ acknowledged: false, message: "Error deleting job" });
  }
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})