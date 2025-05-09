import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util.js';



  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

    /**************************************************************************** */

  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get("/", (req, res) => {
    res.send("Welcome to the Image Filter API! Use /filteredimage?image_url={{URL}} to filter an image.");
  });

  app.get( "/filteredimage", async (req, res) => {
     // Get the image URL from the query parameters
     const image_url = req.query.image_url;

     // Validate the image URL
     if (!image_url) {
         return res.status(400).send('Image URL is required');
     }
 
     try {
         console.log('Image URL:', image_url);
         // Call the filterImageFromURL function
         let filteredImagePath = await filterImageFromURL(image_url);
         
         console.log('New URL:', filteredImagePath)
 
         // Send the filtered image back to the client
         res.status(200).sendFile(filteredImagePath, () => {
             // Delete the local file after sending it
             deleteLocalFiles([filteredImagePath]);
         });
     } catch (error) {
         // Handle errors (e.g., if the image cannot be processed)
         res.status(422).send('Unable to process the image');
     }
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
