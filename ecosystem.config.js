module.exports = {
  apps : [{
    name: "user-service",
    script : "java -jar ./quickhire-user-service/target/user-service-0.0.1-SNAPSHOT.jar",
    log_file: ".logs/user-service.log",
    instances: 2
  },
    name: "job-service",
    script : "java -jar ./quickhire-job-service/target/job-service-0.0.1-SNAPSHOT.jar",
    log_file: ".logs/job-service.log",
    instances: 2
    },
     name: "file-service",
     script : "java -jar ./quickhire-file-service/target/file-service-0.0.1-SNAPSHOT.jar",
     log_file: ".logs/file-service.log",
     instances: 2
      }]
}
