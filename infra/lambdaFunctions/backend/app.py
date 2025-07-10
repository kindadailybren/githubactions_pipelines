import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum

app = FastAPI()
handler = Mangum(app, lifespan="off")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/hello")
def HelloWorld():
    return {"message": "Hello Study Session"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
