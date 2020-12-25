exports.createPostValitor = (req, res, next) => {
	req.check('title', "Write a Title").notEmpty();
	req.check('title', "Title must between 4 to 150 char.").isLength({
		min: 4,
		max: 150
	});

	req.check('body', "Write a Body").notEmpty();
	req.check('body', "Body must between 4 to 150 char.").isLength({
		min: 4,
		max: 2000
	});

	const errors = req.validationErrors()
	//If error the first one should appres
	if(errors){
		const firstError = errors.map((error)=> error.msg)[0];
		return res.status(400).json({error: firstError})
	}

	//Process with next middelware
	next();
};



