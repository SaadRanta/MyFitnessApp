import express from 'express'
const router = express.Router();
import { db } from "../models/index.js"

// router.get('/curriculum', async (req, res) => {
//     const curriculum = await db.Curriculum.aggregate([
//         { $lookup: { from: "courses", foreignField: "cid", localField: "cid", as: "course" } },
        
//         { $unwind: "$course" }, { $project: { _id: 1, curid: 1, cid: 1, title: "$course.title", semno: 1 } }]).sort('semno')
//     res.status(200).json(curriculum);
// });
// router.get('/Fallcurriculum', async (req, res) => {
//     const curriculum = await db.Curriculum.aggregate([
//         { $lookup: { from: "courses", foreignField: "cid", localField: "cid", as: "course" } },
//         { $unwind: "$course" }, 
//         { $project: { _id: 1, curid: 1, cid: 1, title: "$course.title", semno: 1 } },
//         { $match: { semno: { $mod: [2, 1] } } }, 
//         { $sort: { semno: 1 } } // Sort by semno
//     ]);
//     res.status(200).json(curriculum);
// });
// router.get('/Springcurriculum', async (req, res) => {
//     const curriculum = await db.Curriculum.aggregate([
//         { $lookup: { from: "courses", foreignField: "cid", localField: "cid", as: "course" } },
//         { $unwind: "$course" }, 
//         { $project: { _id: 1, curid: 1, cid: 1, title: "$course.title", semno: 1 } },
//         { $match: { semno: { $mod: [2, 0] } } }, 
//         { $sort: { semno: 1 } } // Sort by semno
//     ]);
//     res.status(200).json(curriculum);
// });

// router.get('/faculties', async (req, res) => {
//     const faculties = await db.Faculty.find()
//     res.status(200).json(faculties);
// });
// router.get('/areas', async (req, res) => {
//     const faculties = await db.Area.find()
//     res.status(200).json(faculties);
// });

// router.get('/fac', async (req, res) => {
//     try {
//         const  cid  =20 ; // Assuming the cid is provided as a query parameter

//         const faculties = await db.Area.aggregate([
//             {
//                 $match: {
//                     cid: Number(cid) // Assuming cid is a number
//                 }
//             },
//             {
//                 $lookup: {
//                     from: "faculties",
//                     localField: "fid",
//                     foreignField: "fid",
//                     as: "faculty"
//                 }
//             },
//             {
//                 $unwind: "$faculty"
//             },
//             {
//                 $project: {
//                     cid:1,

                    
//                     faculty: {
//                         fid: 1,
//                         TeacherName: 1,
//                         fulltime: 1
//                     }
//                 }
//             }
//         ]);

//         res.status(200).json(faculties);
//     } catch (error) {
//         console.error("Error fetching faculties:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });







router.get('/fooda', async (req, res) => {
    try {
        const  NDB_No  = 1001;
        if (!NDB_No) {
            return res.status(400).json({ error: 'NDB_No query parameter is required' });
        }
        const foodItem = await db.FoodItem.findOne({ NDB_No });
        if (!foodItem) {
            return res.status(404).json({ error: 'FoodItem not found' });
        }
        res.status(200).json(foodItem);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});






router.get('/food', async (req, res) => {
    const faculties = await db.FoodItem.find()
    res.status(200).json(faculties);
});

export default router;