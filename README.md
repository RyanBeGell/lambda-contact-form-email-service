# Portfolio Contact Form Email Handler

This project contains a serverless **AWS Lambda** function that processes contact form submissions from a personal portfolio website and sends the information via email using **AWS Simple Email Service (SES)**. The function is triggered by an HTTP request through **AWS API Gateway**.

## Prerequisites

- AWS account
- [AWS CLI ]([https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html]) configured 
- An email address verified with AWS SES

## Setup and Deployment

### 1. Verify Email Address in AWS SES

Ensure your email address is verified in AWS SES to use it as the sender's address for outgoing emails.

### 2. Create IAM Role for Lambda Function

Create an IAM role with the necessary permissions for Lambda execution and SES email sending. Attach the `AWSLambdaBasicExecutionRole` and `AmazonSESFullAccess` policies.

### 3. Develop the Lambda Function (or use mine)

Write the Lambda function code in a supported runtime (I used Node.js). It should parse the incoming event for contact form data and use SES to send an email.

### 4. Set Up API Gateway

Create an API Gateway endpoint configured to trigger your Lambda function upon receiving an HTTP POST request. Your front end will make a POST request to this endpoint when submitting the contact form. 

### 5. Automate Deployment with GitHub Actions (optional)

#### Setup AWS Credentials in GitHub Secrets

- Navigate to your GitHub repository settings.
- Go to Secrets and add the following secrets:
  - `AWS_ACCESS_KEY_ID`: Your AWS access key ID.
  - `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key.
  - `AWS_REGION`: Your AWS region (e.g., `us-east-1`).

#### Adjust the Deployment YAML File in This Repository

To automate the deployment, adjust the deployment YAML file located in the `.github/workflows` directory of this repository. Ensure it's configured with the correct steps to deploy your AWS Lambda function and update API Gateway settings as needed.

### 6. Test Everything

After configuring the GitHub Actions workflow, push your changes to the `main` branch. This action will deploy your Lambda function. Test the end-to-end flow by submitting a request to your API Gateway endpoint.

## Usage

With deployment automated, your portfolio site can make POST requests to the API Gateway endpoint with the contact form data.

## License

This project is licensed under the **MIT License**.
