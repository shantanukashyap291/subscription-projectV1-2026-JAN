import subscription from '../models/subscription.model.js'

export const createSubsription = async (req, res) => {
  const userId = req.user._id;

  console.log("userId---->",userId);

  const sub = await subscription.create({
    ...req.body,
    users: userId,
  });

  res.status(201).json({
    success: true,
    data: sub
  });
};
