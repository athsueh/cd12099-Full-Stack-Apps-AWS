# Full Stack Apps on AWS Project

You have been hired as a software engineer to develop an application that will help the FBI find missing people.  The application will upload images to the FBI cloud database hosted in AWS. This will allow the FBI to run facial recognition software on the images to detect a match. You will be developing a NodeJS server and deploying it on AWS Elastic Beanstalk. 
You will build upon the application we've developed during the lessons in this course. You'll complete a REST API endpoint in a backend service that processes incoming image URLs.

## Usage

Testing URL: http://imagefilterapp-dev.us-east-1.elasticbeanstalk.com/

Example: http://imagefilterapp-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg

![alt text](https://github.com/athsueh/cd12099-Full-Stack-Apps-AWS/blob/main/screenshots/7_endpoint_success_EB.PNG "Endpoint example success")

Successful URL responses have a 200 code. If an image URL is provided and the image cannot be processed, the response will be 422.

## License

[License](LICENSE.txt)
