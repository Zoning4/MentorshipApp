# IUC/SEAS Mentorship App

> Serverless mobile mentorship platform built with Flutter and AWS Amplify.

**Author:** Bertin ZONING

## Architecture
- Amazon Cognito - Authentication
- AWS AppSync - GraphQL API
- Amazon DynamoDB - Database (UserProfile, Pairing, Session, Message)
- Amazon S3 - Profile picture storage

## Features
- Email/password sign-up with email verification
- Admin-managed mentor-mentee pairings
- Session scheduling and tracking
- Real-time chat within pairings
- Profile picture upload to S3
- Role-based dashboards (Admin / Mentor / Mentee)

## Run locally
    flutter pub get
    amplify pull --appId diyq2qi0suz0m --envName dev
    flutter run -d chrome --web-port 8080

## Deployment
Push to main branch - GitHub Actions builds and deploys to AWS Amplify Hosting automatically.

## License
MIT License
