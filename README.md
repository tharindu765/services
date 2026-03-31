# QuickHire Business Services

Business microservices for the QuickHire platform.

## Services

### User Service (port 8081)
Manages clients and freelancers. Handles registration, authentication, and profile management.
- **Database:** PostgreSQL

### Job Service (port 8082)
Handles job postings. Clients can post jobs and freelancers can browse and apply.
- **Database:** MongoDB

### File Service (port 8083)
Manages file uploads including resumes and logos. Stores files locally or in cloud storage.

## Build
```bash
mvn clean package
```

## Run
```bash
java -jar quickhire-user-service/target/user-service-0.0.1-SNAPSHOT.jar
java -jar quickhire-job-service/target/job-service-0.0.1-SNAPSHOT.jar
java -jar quickhire-file-service/target/file-service-0.0.1-SNAPSHOT.jar
```
