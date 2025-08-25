import User from "../models/User";

// RecommendedUsers function
export async function getRecommendedUsers(req, res){
    try {
        const currentUserId = req.user.id;
        const currentUser = req.user;

        const recommendedUsers = await User.find({
            $and:[
                {_id: {$ne: currentUserId}}, //exclude current user 
                {$id: {$nin: currentUser.friends}}, //exclude current user's friends
                {isOnboarded: true}
            ]
        })
        res.status(200).json(recommendedUsers);
    } catch (error) {
        console.log("Error in getRecommendedUsers controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



