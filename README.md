# Procedures [React Challenge]

## Running the project

To run this project locally, you can run either the project codebase or run a Docker container.

This project uses localStorage to **emulate** a database.

### Running project codebase

```
  $ git clone git@github.com:Stevenbdl/procedures-challenge.git
  $ yarn install or npm install
  $ yarn run dev
```

### Running Docker container

```
  $ docker pull stevenbdl30/procedures-ui-challenge:v1
  $ docker run -dp 127.0.0.1:<HOST_PORT>:5173 stevenbdl30/procedures-ui-challenge:v1
```

***After running the Docker container, go to 127.0.0.1:HOST_PORT***
