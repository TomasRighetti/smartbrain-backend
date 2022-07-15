// const clarifai = require('clarifai');

// const app = new Clarifai.App({
//    apiKey: '0ce9320837f44831874ba907f546f154'
// });

// const USER_ID = 'tqra4uv30vrp';
// const PAT = '6eb49a3e999b47bd86be682547e04ebb';
// const APP_ID = '7b219b1115514094aa44c9a8a927259e';
// const MODEL_ID = 'face-detection';
// const MODEL_VERSION_ID = '45fb9a671625463fa646c3523a3087d5';
// // Change this to whatever image URL you want to process
// // Placeholder Image: https://clarifai.com/cms-assets/20180320221619/face-006.jpg
// let IMAGE_URL = '';

// const handleApiCall = (req, res) => {
// 	IMAGE_URL = req.body.input;
// 	setImageURL(IMAGE_URL);
// 	// setImageURL(IMAGE_URL);

// 	const raw = JSON.stringify({
// 	   "user_app_id": {
// 	      "user_id": USER_ID,
// 	      "app_id": APP_ID
// 	   },
// 	   "inputs": [
// 	   {
// 	      "data": {
// 	         "image": {
// 	             "url": IMAGE_URL
// 	         }
// 	      }
// 	   }
// 	   ]
// 	});

// 	const requestOptions = {
// 	   method: 'POST',
// 	   headers: {
// 	      'Accept': 'application/json',
// 	      'Authorization': 'Key ' + PAT
// 	   },
// 	   body: raw
// 	};

// 	fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)

// }


const handleImagePut = (req, res, db) => {
	const { id } = req.body;
	db('users').where('id', '=', id)
		.increment('entries', 1)
		.returning('entries')
		.then(entries => {
			res.json(entries[0].entries);
		})
		.catch(err => res.status(400).json('Unable to get entries'))
}

module.exports = {
	handleImagePut: handleImagePut,
	//handleApiCall: handleApiCall
}