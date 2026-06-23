# Use a lightweight official Python runtime as a parent image
FROM python:3.10-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PORT=8000

# Set working directory inside the container
WORKDIR /app

# Install system dependencies needed for python packages (like FAISS / C-bindings)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy only requirements first to leverage Docker layer caching
COPY requirements.txt .

# Install python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose the API port
EXPOSE 8000

# Run document ingestion to build vectorstore, then start the FastAPI server on startup.
# This ensures HF_ACCESS_TOKEN is read from the runtime environment instead of requiring it at build-time.
CMD ["sh", "-c", "python ingest.py && uvicorn main:app --host 0.0.0.0 --port $PORT"]
