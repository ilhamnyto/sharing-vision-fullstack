# Sharing Vision Fullstack

## Run Backend Services

1. Go to backend folder
```bash
cd backend/
```

2. Copy .env file
```bash
cp .env.example .env
```

3. Adjust your database credentials in .env

4. Run migration

```bash
go run database/migration/migration.go
```

5. Install package

```bash
go mod tidy
```

6. Run backend API

```bash
go run main.go
```

Your app will run on
```bash
http://localhost:8080
```

## Run Frontend Services

1. Go to frontend folder

```bash
cd frontend/
```

2. Install package

```bash
npm i
```

3. Run frontend app

```bash
npm run dev
```

Your app will run on
```bash
http://localhost:3000
```


POSTMAN : https://documenter.getpostman.com/view/13820554/2sA3BuVoNY